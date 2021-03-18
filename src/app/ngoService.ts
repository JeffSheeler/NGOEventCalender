import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Event } from './event';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';


@Injectable()
export class NgoService{
    private _url: string = "http://localhost:7000/event/api";


    constructor(private http: HttpClient){}

    getEvent(): Observable<Event[]>{
        return this.http.get<Event[]>(this._url)
        .pipe(catchError(this.errorHandler));
    }
    getEventId(id):Observable<Event>{
        return this.http.get<Event>(this._url + "/" + id)
        .pipe(catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse){
        return throwError(error.message || "Server Error");
      }

    addEvent(userData) {
        return this.http.post<Event>(this._url, userData);
    }

    editEvent(userData, eventId) {
        return this.http.put<Event>(this._url+'/'+eventId, userData);
    }



}