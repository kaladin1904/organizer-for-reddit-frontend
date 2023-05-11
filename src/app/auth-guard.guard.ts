import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GetSavedService } from './service/get-saved.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  private username: string | null = "";
  constructor(private getSavedService: GetSavedService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.username = localStorage.getItem('username');
      if(this.username !== undefined) {
        this.getSavedService.isLoggedIn(this.username!).subscribe((result) => {
          if(result.username == this.username)
            return true;
          else
            return false;
        });
      }else {
        return false;
      }
      return this.getSavedService.isLoggedIn(this.username!);
  }
  
}
