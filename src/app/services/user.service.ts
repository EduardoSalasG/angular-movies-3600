import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { userToken, Usuario } from '../interfaces/interfaces';

const url = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuarioLogueado:boolean = false;
  token:any;
  userName:string = "";
  userRole:string = "";

  constructor(private http:HttpClient) { }

  async login(usuario:Usuario){

    return new Promise(resolve=>{
      this.http.post<userToken>(`${url}/account/login`,usuario)
      .subscribe(resp=>{
        console.log(resp);  
        if(resp.status == "ok"){
          this.guardarToken(resp.token);   
          this.leerToken(); 
          resolve(true);    
        }else{
          this.borraToken();
          resolve(false);
        }
      });
    })    
  }

  guardarToken(token:string){
    localStorage.setItem("token",token);
    this.token = token;
    this.usuarioLogueado = true;
  }

  borraToken(){
    localStorage.removeItem("token");
  }

  cargarToken(){
    var tokenString = localStorage.getItem("token")?.toString();
    this.token = tokenString;
    if(this.token){
      this.usuarioLogueado=true;
      this.leerToken();
    }
  }

  leerToken(){
    let jwt = this.token;
    let jwtData = jwt.split('.')[1];
    let decodeJSONJwtData = window.atob(jwtData);
    let decodeJwtData = JSON.parse(decodeJSONJwtData);
    console.log(decodeJwtData);
    this.userName = decodeJwtData['unique_name'];
    this.userRole = decodeJwtData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }

  logout(){
    this.borraToken();
    this.usuarioLogueado = false;
    this.userName = "";
    this.userRole = "";  
  }

  async createUser(usuario:Usuario){

    return new Promise(resolve=>{
      this.http.post<userToken>(`${url}/account`,usuario)
      .subscribe(resp=>{
        console.log(resp);  
        if(resp.status == "ok"){
          resolve(true);
        }else{
          resolve(false);
        }
      }, (error)=>{
        resolve(false);
      });
    })    
  }

  // createUser(usuario:Usuario){
  //   return this.http.post(`${url}/account`,usuario);
  // }

}
