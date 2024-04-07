package com.pagina_web_2.finanzas.Controlador;

import com.pagina_web_2.finanzas.Modelo.Persona;
import com.pagina_web_2.finanzas.Repositorio.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200","http://localhots:8080"})
public class UsuarioControlador {
    @Autowired

    private UsuarioRepositorio repo;

    @GetMapping()
    public String index(){
        return "Conexión exitosa ...";
    }

    @GetMapping("Leer")
    public List<Persona> getPersonas(){
        return repo.findAll();
    }

    @PostMapping("Crear")
    public String Guardar(@RequestBody Persona per1){
         repo.save(per1);
         return "Grabado";
    }

    @PutMapping("Editar/{id}")
    public String Actualizar(@PathVariable Long id,@RequestBody Persona per2){
        Persona datosPersona=repo.findById(id).get();
        datosPersona.setNombre(per2.getNombre());
        datosPersona.setApellido(per2.getApellido());
        datosPersona.setCorreo(per2.getCorreo());
        datosPersona.setContrasenia(per2.getContrasenia());
        repo.save(datosPersona);
        return "Editado correctamente";
    }

   @DeleteMapping("Eliminar/{id}")
    public String Eliminar(@PathVariable Long id){
        Persona borrarPersona=repo.findById(id).get();
        repo.delete(borrarPersona);
       return "Borrado correctamente";
   }

}
