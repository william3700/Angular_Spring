package com.pagina_web_2.finanzas.Modelo;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity

public class Persona {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)

    private Long id;

    @Column

    private String nombre;

    @Column

    private String apellido;

    @Column

    private String correo;

    @Column

    private String contrasenia;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasenia() {
        return contrasenia;
    }

    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
