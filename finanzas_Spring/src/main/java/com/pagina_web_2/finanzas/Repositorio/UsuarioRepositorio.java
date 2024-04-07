package com.pagina_web_2.finanzas.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pagina_web_2.finanzas.Modelo.Persona;
public interface UsuarioRepositorio extends JpaRepository<Persona,Long> {
}
