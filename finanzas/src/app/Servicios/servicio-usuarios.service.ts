import { Injectable } from '@angular/core';
import { PersonaComponent } from '../Modelo/persona/persona.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarios {

  constructor(private http:HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }



}
