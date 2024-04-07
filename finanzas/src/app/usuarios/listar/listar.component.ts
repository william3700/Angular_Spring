import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServicioUsuarios } from '../../Servicios/servicio-usuarios.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [RouterLink,CommonModule,HttpClientModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  

  descripcion=[{
    "id":"",
    "nombre":"",
    "apellido":"",
    "correo":"",
    "contrasenia":""
  }];

constructor(private router:Router, private http:HttpClient){};


ngOnInit(): void{
  this.http.get("http://localhost:8080/Leer").subscribe((respuesta:any)=>{
    this.descripcion=respuesta;
  });
}

agregarUsuario(){
  this.router.navigate(['agregar']);
}

actualizarUsuario(){
  this.router.navigate(['editar']);
}


}
