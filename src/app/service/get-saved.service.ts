import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetSavedService {
  constructor(private http: HttpClient) {
  }

  public getSavedPosts(username: string): Observable<any> {
    const url = environment.baseUrl + 'saved';
    let queryParams = new HttpParams();
      queryParams = queryParams.append("username",username);
    return this.http.get<any>(url, {params: queryParams});
  }

  public getAccessToken(state: string, code: string, username: string): Observable<any>  {

      const url = environment.baseUrl + 'getAccessToken';
   
      let queryParams = new HttpParams();
      queryParams = queryParams.append("state",state);
      queryParams = queryParams.append("code",code);
      queryParams = queryParams.append("username",username);
   
      return this.http.get<any>(url,{params:queryParams});
  }

  public checkLogin(username: string, password: string): Observable<any> {
    const url = environment.baseUrl + 'login';
    return this.http.post<any>(url,{username : username, password: password});
  }

  public signup(username: string, password: string): Observable<any> {
    const url = environment.baseUrl + 'signup';
    return this.http.post<any>(url,{username : username, password: password});
  }

  public isLoggedIn(username: string): Observable<any> {
    const url = environment.baseUrl + 'isLoggedIn';
    let queryParams = new HttpParams();
      queryParams = queryParams.append("username",username);
    return this.http.get<any>(url, {params: queryParams});
  }

  public logout(username: string): Observable<any> {
    const url = environment.baseUrl + 'logout';
    let queryParams = new HttpParams();
      queryParams = queryParams.append("username",username);
    return this.http.get<any>(url, {params: queryParams});

  }
}
