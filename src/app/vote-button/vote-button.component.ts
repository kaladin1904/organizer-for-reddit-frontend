import { Component, Input, OnInit } from '@angular/core';
import { SavedPost } from '../model/saved-post';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: SavedPost | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
