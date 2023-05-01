import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SavedPost } from '../model/saved-post';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetSavedService {

  constructor(private http: HttpClient) {
  }

  executeGetSavedPostsService() {
      return this.http.get<SavedPost>('http://localhost:8080/sample');
  }

  public getSavedPosts(): Observable<String> {
    const url = environment.baseUrl + 'saved';
    return this.http.get<String>(url);
  }

  public getAccessToken(state: string, code: string): Observable<String>  {

      const url = environment.baseUrl + 'getAccessToken';
   
      let queryParams = new HttpParams();
      queryParams = queryParams.append("state",state);
      queryParams = queryParams.append("code",code);
   
      return this.http.get<String>(url,{params:queryParams});
  }
}
