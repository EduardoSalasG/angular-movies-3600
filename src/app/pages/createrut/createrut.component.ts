import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RutCreacion } from 'src/app/interfaces/interfaces';
import { RutService } from 'src/app/services/rut.service';

@Component({
  selector: 'app-createrut',
  templateUrl: './createrut.component.html',
  styleUrls: ['./createrut.component.css']
})
export class CreaterutComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:RutService, private router:Router) { }

  ngOnInit(): void {
  }

  fechaInicioAct = new Date("2000-06-29T00:00:00Z");
  afectoIVA:boolean = true;
  rutCreacion:RutCreacion = {};
  error:boolean = false;
  message = "";

  createRutForm = this.fb.group({
    "rut" : new FormControl(null, Validators.required),
    "nombre" : new FormControl(null, Validators.required),
    "nombreActividad" : new FormControl(null, Validators.required),
    "codigoActividad" : new FormControl(null, Validators.required),
  })


  submitForm(){
    console.log("Form submited");
    if(this.createRutForm.valid){
      this.rutCreacion.rut = this.rut?.value;
      this.rutCreacion.nombre = this.nombre?.value;
      this.rutCreacion.nombreActividad = this.nombreActividad?.value;
      this.rutCreacion.codigoActividad = this.codigoActividad?.value;
      this.rutCreacion.afectoIVA = this.afectoIVA;
      this.rutCreacion.fechaInicioAct = this.fechaInicioAct;
      console.log(this.rutCreacion)

      this.service.createRut(this.rutCreacion)
      .subscribe(resp=>{
        console.log(resp)
        console.log("Rut ingresado correctamente")
        this.router.navigate(['/rut']);
      },(error)=>{
        console.log(error);
        this.message="Rut no cumple con el formato"
        ;
      });
    }

  }

  get rut (){
    return this.createRutForm.get("rut");
  }
  get nombre (){
    return this.createRutForm.get("nombre");
  }
  get nombreActividad (){
    return this.createRutForm.get("nombreActividad");
  }
  get codigoActividad (){
    return this.createRutForm.get("codigoActividad");
  }
}
