import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Genero, GenerosResponse } from '../interfaces/interfaces';

const URL = environment.URL

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http:HttpClient) { }

  getGeneros(page:number,sort:string){
    return this.http.get<GenerosResponse>(`${URL}/genero?page=${page}&sort=${sort}`);
  }

  guardarGenero(genero:Genero){
    return this.http.post(`${URL}/genero`,genero)
  }

  getGeneroById(id:string){
    return this.http.get(`${URL}/genero/byid/${id}`)
  }

  updateGenero(id:string,genero:Genero){
    return this.http.put(`${URL}/genero/${id}`,genero)
  }

  deleteGenero(id:string){
    return this.http.delete(`${URL}/genero?id=${id}`)
  }

  searchGenero(searchtext:string){
    return this.http.get(`${URL}/genero/search?searchtext=${searchtext}`);
  }

}
