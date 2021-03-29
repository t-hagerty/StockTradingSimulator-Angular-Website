import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../models/Company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44325/api/companies';

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get():Observable<Company[]> {
    // Get all company entries
    return this.http.get<Company[]>(this.accessPointUrl, {headers: this.headers});
  }

  public getSearchResult(searchTerm: string):Observable<Company[]> {
    // Get all company entries that contain the search term string in their name or ticker symbol
    return this.http.get<Company[]>(this.accessPointUrl + "/Search/" + searchTerm, {headers: this.headers});
  }

  public add(payload: Company) {
    return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
  }

  public remove(payload: Company) {
    return this.http.delete(this.accessPointUrl + '/' + payload.id, {headers: this.headers});
  }

  public update(payload: Company) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload, {headers: this.headers});
  }
}
