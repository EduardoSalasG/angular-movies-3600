import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getDataMovies(){
    return this.http.get<ApiResult>('https://www.omdbapi.com/?s=star&apikey=6ede04f9')
  }

  searchDatamovie(text:string){
    return this.http.get<ApiResult>(`https://www.omdbapi.com/?s=${text}&apikey=6ede04f9`)

  }
}
