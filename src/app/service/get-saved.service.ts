import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SavedPost } from '../model/saved-post';

@Injectable({
  providedIn: 'root'
})
export class GetSavedService {

  constructor(private http: HttpClient) {
  }
  executeGetSavedPostsService() {
      return this.http.get<SavedPost>('http://localhost:8080/sample');
  }
}
