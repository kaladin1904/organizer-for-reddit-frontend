import { Component, OnInit } from '@angular/core';
import { GetSavedService } from '../service/get-saved.service';
import { environment } from 'src/environments/environment';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private static DURATION = "permanent";
  private static SCOPE = "history,identity";
  private static REDIRECT_URI = "http://localhost:4200/saved/";
  private static RANDOM_STRING = "randomString";
  private static RESPONSE_TYPE = "code";

  public static URL : string = `https://www.reddit.com/api/v1/authorize?client_id=${environment.CLIENT_ID}`+
`&response_type=${RegisterComponent.RESPONSE_TYPE}&state=${RegisterComponent.RANDOM_STRING}`+
`&redirect_uri=${RegisterComponent.REDIRECT_URI}&duration=${RegisterComponent.DURATION}&scope=${RegisterComponent.SCOPE}`;

  public invalidUser = false;
  public username = '';
  public password = '';
  errorMessage: string = '';
  showErrorMessage: boolean = false;

  constructor(
    private getSavedService: GetSavedService,
    private validationService: ValidationService,
  ) {}

  public ngOnInit(): void {}

  public onSubmit(): void {
    this.invalidUser = false;
    if (!this.validationService.isEmail(this.username)) {
      this.showErrorMessage = true;
      this.errorMessage = 'Please enter a valid email';
      return;
    }

    if (!this.validationService.isPassword(this.password)) {
      this.showErrorMessage = true;
      this.errorMessage = 'Please enter a valid password';
      return;
    }
    this.showErrorMessage = false;
    this.getSavedService.signup(this.username, this.password).subscribe(result => {
      if(result.username == this.username) {
        this.invalidUser = false;
        localStorage.setItem('username', this.username);
        this.redirectToReddit();
      }

    }, error => {
      if(error.error === "user already exists") {
        this.invalidUser = true;
      }
    });
  }

  public redirectToReddit() {
    window.open(RegisterComponent.URL,'_self');
  }


}
