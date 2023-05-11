import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetSavedService } from '../service/get-saved.service';
import { SavedPost } from '../model/saved-post';

@Component({
  selector: 'app-test',
  templateUrl: './show-saved.component.html',
  styleUrls: ['./show-saved.component.css']
})
export class ShowSavedComponent implements OnInit {
  private state : string = "";
  private code : string = "";
  private username : any = "";
  searchText: string = "";
  public filteredPosts: SavedPost[] = [];
  public dataLoaded: boolean = false;

  public allSavedPosts: SavedPost[] = [];
  displayedColumns: string[] = ['user','subreddit-name', 'title','upvotes', 'awards'];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private getSavedService: GetSavedService) { }
    
    public filter(): void {
      const filterValue = this.searchText.toLowerCase();
  
      this.filteredPosts = this.allSavedPosts.filter(savedPost => 
        savedPost.subreddit_name_prefixed.toLowerCase().includes(filterValue) 
        || savedPost.title.toLowerCase().includes(filterValue));

    }
  
  ngOnInit(): void {
    this.dataLoaded = false;
    const isRegisteredUser : boolean = this.readQueryString();
    if(isRegisteredUser) {
      this.getSavedService.getAccessToken("randomState", "existingUser", this.username).subscribe(result => {
        this.getSavedService.getSavedPosts(this.username).subscribe((savedPosts) => {
          this.allSavedPosts = savedPosts.allSavedPosts;
          this.allSavedPosts.forEach(post => {
            post.permalink = "https://www.reddit.com" + post.permalink;
          });
          this.filteredPosts = this.allSavedPosts;
          this.dataLoaded = true;
        });
      });
    } else {
      //get username from storage
      this.username = localStorage.getItem('username');
      this.getSavedService.getAccessToken(this.state,this.code, this.username)
      .subscribe((result) => {
        this.getSavedService.getSavedPosts(this.username).subscribe((savedPosts) => {
          this.allSavedPosts = savedPosts.allSavedPosts;
          this.allSavedPosts.forEach(post => {
            post.permalink = "https://www.reddit.com" + post.permalink;
          });
          console.log("total posts = " + this.allSavedPosts.length);
          this.filteredPosts = this.allSavedPosts; 
          this.dataLoaded = true;
        });
      });
    }
  }

  public readQueryString(): boolean {
    this.route.queryParams.subscribe(params => {
      this.state = params['state'];
      this.code = params['code'];
      this.username = params['username'];
    });
    if(this.state === undefined && this.code === undefined && this.username !== undefined) {
      return true;
    } else {
      return false;
    }
 }

 public logout(): void {
  this.getSavedService.logout(this.username).subscribe((result) => console.log(result));
 }

}