import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tutorial} from "../models/tutorial";
import {BASE_API_URL} from "../constants/injection";

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
  }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.baseUrl+'/Tutorials');
  }
}
