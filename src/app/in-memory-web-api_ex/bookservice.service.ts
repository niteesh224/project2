import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private _http:HttpClient) {}
    apiUrl="/api/book";
    getbooks():Observable<Book[]>{
      return this._http.get<Book[]>(this.apiUrl);}

    }
  

