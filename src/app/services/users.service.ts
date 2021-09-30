import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from './../models/tweet';
@Injectable({
  providedIn: 'root'
})
export class usersService {
  _url='assets/tweets.json';
  constructor(private _http:HttpClient) { }
  getTweets():Observable<Tweet[]>
  {    
    return this._http.get<Tweet[]>(this._url)
    // .pipe(
    //   catchError(
    //     err=>{
    //       return throwError("error in getting tweets");
    //     }
    //   )
    // );
  }

}