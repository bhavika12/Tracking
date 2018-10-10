//Multiple Post Request in Service
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription, observable } from 'rxjs';
import { Vehicle } from "../app/vehicle";
import { tap, catchError } from 'rxjs/operators';
///For header Information
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MzcwMDU2NDYsInVzZXJJZCI6ImFjOGNkYmQ4LWRiYzItNDZjNi04NzQ4LTZiZjc5MDgyNzIyZSIsImVtYWlsIjoic3VuaWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDg1NDMyOTUxIiwib3JnSWQiOiI0ZjExZGRjNS0xNjI3LTRiOTUtOTFjOS1iY2ZkZjRkN2QyZDciLCJuYW1lIjoiU3VuaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZX0.Pfq_4x28v2-P_tuNX2ODBDr5bJkLtVS5S3mYJd1bEQU'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // for BaseUrl
  baseUrl = "http://apis.fretron.com/dashBoard/vehicle/page?next=0";

  constructor(private http: HttpClient) { }

  getDataFromStore(body: object = {}) {

    return this.http.post<Vehicle>(this.baseUrl, body, httpOptions)
      .map(res =>
        console.log(res));

  }

  addData(body: object = {}): Observable<Vehicle> {
    return this.http.post<any>(this.baseUrl,body,httpOptions);
  }	

  // get(url: string, options: {
  //   headers?: HttpHeaders;
  //   observe: 'response';
  //   params?: HttpParams;
  //   reportProgress?: boolean;
  //   responseType?: 'json';
  //   withCredentials?: boolean;
  // }): Observable<HttpResponse<Object>>;
  // getData(baseUrl,body:object={},httpOptions){
  //   return this.http.get(this.baseUrl,bodzz,httpOptions).
  //   subscribe(data=>
  //     {
  //       console.log("we got",data)
  //     });
  // }

}
