import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RutCreacion, RutDTO } from '../interfaces/interfaces';

const URL = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class RutService {

  constructor(private http: HttpClient) { }


  createRut(rut:RutCreacion)
  {
    return this.http.post(`${URL}/rut`,rut);
  }

  findRut(rut:RutDTO)
  {
    return this.http.post(`${URL}/rut/buscar`,rut);
  }



}
