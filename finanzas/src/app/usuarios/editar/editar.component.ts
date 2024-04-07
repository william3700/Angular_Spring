import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  nombre="";
  apellido="";
  correo="";
  contrasenia="";
  verificarContrasenia="";
  bandera=false;

  constructor(private router:Router){};

  verfiricarContrasenia(){
        if(this.contrasenia==this.verificarContrasenia){
           this.bandera=true;
           this.router.navigate(['listar']);
        }else{
           this.bandera=false;
        }
  }

}
