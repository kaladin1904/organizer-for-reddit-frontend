import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetSavedService } from '../service/get-saved.service';

@Component({
  selector: 'app-test',
  templateUrl: './show-saved.component.html',
  styleUrls: ['./show-saved.component.css']
})
export class ShowSavedComponent implements OnInit {
  private state : string = "";
  private code : string = "";
  constructor(private route: ActivatedRoute,
    private router: Router,
    private getSavedService: GetSavedService) { }
    

  ngOnInit(): void {
    this.readQueryString();
    this.getSavedService.getAccessToken(this.state,this.code).subscribe((result) => {
      console.log(result);
      this.getSavedService.getSavedPosts().subscribe((savedPosts) => {
        console.log(savedPosts);
      });
    });

    
  }

  public readQueryString() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.state = params['state'];
      this.code = params['code'];
      console.log(this.state);
      console.log(this.code);
    });

 }

}