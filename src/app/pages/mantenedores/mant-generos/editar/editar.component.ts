import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/interfaces/interfaces';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private service:GenerosService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  nuevoGenero:Genero = {}
  generoId:string=""
  generoEdit:Genero={}

  generoForm : FormGroup = this.fb.group({
    "nombre": new FormControl('',Validators.required)
  });


  ngOnInit(): void {
    this.generoId = String(this.route.snapshot.paramMap.get('id'))
    this.service.getGeneroById(this.generoId).subscribe((resp:any)=>{
      // console.log(resp);
      this.generoEdit = resp.generoDb;
      this.generoForm.patchValue({
        nombre:this.generoEdit.nombre
      })
    })
  }

  get nombre(){
    return this.generoForm.get("nombre");
  }

  submitForm(){
    if(this.generoForm.valid){
      this.nuevoGenero.nombre = this.nombre?.value;
      this.service.updateGenero(this.generoId,this.nuevoGenero).subscribe((resp:any)=>{
        if(resp.ok){
          this.router.navigate(['mantenedor-generos']);
        }
      })
    }
  }


}
