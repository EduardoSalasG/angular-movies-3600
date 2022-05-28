import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';
import { ConfirmedValidator } from 'src/confirmed.validator';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private service:UserService,
    private router:Router) { }

  usuario: Usuario = {};
  error:boolean = false;
  errorMsj:string = "";


  registerForm: FormGroup = this.fb.group({
    "email" : new FormControl(null,Validators.compose([Validators.required,Validators.email])),
    "password": new FormControl(null,Validators.required),
    "repassword": new FormControl(null,Validators.required)
  }, { validator: ConfirmedValidator('password', 'repassword')})

    
  

  ngOnInit(): void {
  }

  async submitForm(){
    console.log("Form submited");
    if(this.registerForm.valid){
      this.usuario.email = this.email?.value;
      this.usuario.password = this.password?.value;

      const result = await this.service.createUser(this.usuario);
        if(result){
          const resultLogin = await this.service.login(this.usuario);
          if(resultLogin){
            this.router.navigate(['/home']);
          }
        }else{
        this.error = true;
        this.errorMsj = "La contraseña no cumple con el formato requerido";
        }
    }
  }

  // submitForm(){
  //   if(this.registerForm.valid){
  //     this.usuario.email = this.email?.value;
  //     this.usuario.password = this.password?.value;
  //     console.log(this.usuario);
  //     this.service.createUser(this.usuario)
  //     .subscribe(resp=>{
  //       console.log(resp);
  //       this.router.navigate(['/login']);
  //     })
  //   }
  // }


  get email(){
    return this.registerForm.get("email");
  }


  get password(){
    return this.registerForm.get("password");
  }

  get repassword(){
    return this.registerForm.get("repassword");
  }

}
