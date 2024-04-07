import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonaComponent } from '../../Modelo/persona/persona.component';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule,RouterLink,CommonModule,HttpClientModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
     nombre="";
     apellido="";
     correo="";
     contrasenia="";
     verificarContrasenia="";
     bandera=false;
     
     constructor(private router:Router, private http:HttpClient){};

     verfiricarContrasenia(){
           if(this.contrasenia==this.verificarContrasenia){
              this.bandera=true;

              //this.http.post("http://localhost:8080/Crear").subscribe((PersonaComponent));

              this.router.navigate(['listar']);
           }else{
              this.bandera=false;
           }
     }

}
