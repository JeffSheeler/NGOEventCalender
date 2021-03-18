import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService {

  private _url: string = "http://localhost:7000/user";

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this._url + '/api')
    .pipe(catchError(this.errorHandler));
  }

  getUserId(id): Observable<User>{
    return this.http.get<User>(this._url +'/api'+ id)
    .pipe(catchError(this.errorHandler));
  }

  register(userData) {
    return this.http.post<any>(this._url+'/signup/', userData);
  }

  editEvent(userID,userData) {
    return this.http.put<any>(this._url+'/api'+userID, userData);
  }

  login(user){
    return this.http.post<any>(this._url + "/signin", user);
}
  
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}

