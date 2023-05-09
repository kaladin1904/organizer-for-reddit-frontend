import { Component, Input, OnInit } from '@angular/core';
import { SavedPost } from '../model/saved-post';

@Component({
  selector: 'app-post-tiles',
  templateUrl: './post-tiles.component.html',
  styleUrls: ['./post-tiles.component.css']
})
export class PostTilesComponent implements OnInit {

  @Input() data: Array<SavedPost> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  redirectToPost(post: SavedPost): void {
    window.open(post.permalink);
  }
}
