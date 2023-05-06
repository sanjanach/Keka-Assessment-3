import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from './groups';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData():Observable<Group[]>{
    return this.http.get<Group[]>('https://63fc599f8ef914c55595a98a.mockapi.io/chat-group')
  }

  removeData():Observable<Group[]>{
    return this.http.delete<Group[]>('https://63fc599f8ef914c55595a98a.mockapi.io/chat-group')
  }
  
}
