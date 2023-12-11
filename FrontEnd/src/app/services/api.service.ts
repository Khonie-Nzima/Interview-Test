import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hero} from "../Models/hero";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getHeroes(){
    return this.http.get<Hero[]>(`${environment.baseUrl}api/heroes`);
  }

  evolveHero(object: any){
    return this.http.post<Hero>(`${environment.baseUrl}api/heroes`, object);
  }
}
