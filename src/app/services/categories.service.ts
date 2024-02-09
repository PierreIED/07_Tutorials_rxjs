import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Category} from "../models/category";
import {BASE_API_URL} from "../constants/injection";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl+'/Categories');
  }
}
