import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Crud } from '../models/crud';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiURL = "https://jsonplaceholder.typicode.com";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Crud[]> {
    return this.httpClient.get<Crud[]>(this.apiURL + '/posts/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(post): Observable<Crud> {
    return this.httpClient.post<Crud>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id): Observable<Crud> {
    return this.httpClient.get<Crud>(this.apiURL + '/posts/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id, post): Observable<Crud> {
    return this.httpClient.put<Crud>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id) {
    return this.httpClient.delete<Crud>(this.apiURL + '/posts/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
