import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiurl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient) { }
  apicall(search:string):Observable<any[]>{
    return this.http.get<any[]>(apiurl.search_api)
    
  }
}
