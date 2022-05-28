import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RutCreacion, RutDTO, RutResponse } from 'src/app/interfaces/interfaces';
import { RutService } from 'src/app/services/rut.service';

@Component({
  selector: 'app-rut',
  templateUrl: './rut.component.html',
  styleUrls: ['./rut.component.css']
})
export class RutComponent implements OnInit {

  constructor(private service:RutService, private fb:FormBuilder) { }

  rutInput: string = "";
  rutSend: RutDTO = {};
  rutResponse: RutResponse = {};
  theError= false;
  show = false;
  loading = false;

  ngOnInit(): void {
  }

  submitForm(){
    this.rutSend.rut = this.rutInput;
    console.log(this.rutSend)
    const resp = this.service.findRut(this.rutSend)
    .subscribe(resp=>{
      console.log(resp);  
      this.rutResponse = resp;
      this.show = true;
    }, (error)=>{
      this.theError = true;
      console.log("El rut no existe en la base");
    });
  }


}
