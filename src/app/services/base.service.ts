import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private httpClient: HttpClient) { }

  getLocalData(key: string): string | null {
    return localStorage.getItem(key);
  }

  setLocalData(key: string, value: any): void {
    if (typeof (value) !== 'string') {
      localStorage.setItem(key, JSON.stringify(value));
      return;
    }
    localStorage.setItem(key, value);
  }

  getData(url: string, headers: any): Observable<any> {
    Object.assign(headers, {});
    const header = new HttpHeaders(headers);
    const httpOptions = {
      headers: header
    };
    return this.httpClient.get(url, httpOptions).pipe();
  }
  postData(url: string, data: any, headers: any): Observable<any> {
    Object.assign(headers, {});
    const header = new HttpHeaders(headers);
    const httpOptions = {
      headers: header
    };
    return this.httpClient.post(url, data, httpOptions).pipe();
  }



}
