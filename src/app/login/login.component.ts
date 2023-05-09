import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetSavedService } from '../service/get-saved.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getSavedService: GetSavedService
  ) {}

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    this.loginValid = true;

    this.getSavedService.checkLogin(this.username, this.password).subscribe(result => {
      if(result.username == this.username) {
        this.loginValid = true;
        //send username as query params
        this.router.navigate(['/saved'], {
          queryParams: {
            username : this.username,
          },
        });
      }
    }, error => {
        if(error.error === "user does not exist") {
          this.loginValid = false;
        }
        if(error.error === "incorrect password") {
          this.loginValid = false;
        }
    });
  }
}
