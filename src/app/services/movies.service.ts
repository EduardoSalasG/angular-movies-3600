import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResult, Pelicula } from '../interfaces/interfaces';

const URL: string = environment.URL

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

  getDataMoviesLocal()
  {
    return this.http.get<ApiResult>(`https://localhost:7160/movies`)
  }

  getDataPeliculas(){
    return this.http.get<Pelicula[]>(`${URL}/peliculas`)
  }

  postPelicula(pelicula:Pelicula){
    return this.http.post(`${URL}/peliculas`,pelicula);
  }

}
