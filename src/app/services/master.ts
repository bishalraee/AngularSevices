import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class Master {
  //private variable means only accessible within the Master class
  private apiURL = 'https://dummyjson.com/posts';

  constructor(private httpClient: HttpClient){

  }
  
  getPosts(): Observable<any>{
    return this.httpClient.get<any>(this.apiURL);
  }

}
