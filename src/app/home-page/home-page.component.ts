import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetSavedService } from '../service/get-saved.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private DURATION = "permanent";
  private SCOPE = "history,identity";
  private REDIRECT_URI = "http://localhost:4200/test/";
  private RANDOM_STRING = "randomString";
  private RESPONSE_TYPE = "code";

  private URL : string = `https://www.reddit.com/api/v1/authorize?client_id=${environment.CLIENT_ID}&response_type=${this.RESPONSE_TYPE}` + 
    `&state=${this.RANDOM_STRING}&redirect_uri=${this.REDIRECT_URI}&duration=${this.DURATION}&scope=${this.SCOPE}`;

  constructor(private route: ActivatedRoute,
    private router: Router, private getSavedService: GetSavedService) { }

  ngOnInit(): void { 
  }

  public redirectToReddit() {
    window.location.href = this.URL;
  }
}
