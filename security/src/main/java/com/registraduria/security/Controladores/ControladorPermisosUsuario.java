package com.registraduria.security.Controladores;

import com.registraduria.security.Modelos.*;
import com.registraduria.security.Repositorios.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/permisos-usuarios")
public class ControladorPermisosUsuario {
    @Autowired
    private RepositorioPermisosUsuario miRepositorioPermisosUsuario;
    @Autowired
    private RepositorioPermiso miRepositorioPermiso;
    @Autowired
    private RepositorioUsuario miRepositorioUsuario;

    @GetMapping("")
    public List<PermisosUsuario> index() {
        return this.miRepositorioPermisosUsuario.findAll();
    }

    /**
     * Asignación rol y permiso
     *
     * @param id_usuario
     *
     * @param id_permiso
     * @return
     */
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("usuario/{id_usuario}/permiso/{id_permiso}")
    public PermisosUsuario create(@PathVariable String id_usuario, @PathVariable
    String id_permiso) {
        PermisosUsuario nuevo = new PermisosUsuario();
        Usuario elUsuario = this.miRepositorioUsuario.findById(id_usuario).get();
        Permisos
                elPermiso = this.miRepositorioPermiso.findById(id_permiso).get();
        if (elUsuario != null && elPermiso != null) {
            nuevo.setPermisos(elPermiso);
            nuevo.setUsuario(elUsuario);
            return this.miRepositorioPermisosUsuario.save(nuevo);
        } else {
            return null;
        }
    }
    @GetMapping("{id}")
    public PermisosUsuario show(@PathVariable String id){
        PermisosUsuario permisosUsuarioActual=this.miRepositorioPermisosUsuario
                .findById(id)
                .orElse(null);
        return permisosUsuarioActual;
    }
    /**
     * Modificación Usuario y Permiso
     * @param id
     * @param id_usuario
     * @param id_permiso
     * @return
     */
    @PutMapping("{id}/usuario/{id_usuario}/permiso/{id_permiso}")
    public PermisosUsuario update(@PathVariable String id,@PathVariable
    String id_usuario,@PathVariable String id_permiso){
        PermisosUsuario permisosUsuarioActual=this.miRepositorioPermisosUsuario
                .findById(id)
                .orElse(null);

        Usuario elUsuario=this.miRepositorioUsuario.findById(id_usuario).get();
        Permisos
                elPermiso=this.miRepositorioPermiso.findById(id_permiso).get();
        if(permisosUsuarioActual!=null && elPermiso!=null && elUsuario!=null){
            permisosUsuarioActual.setPermisos(elPermiso);
            permisosUsuarioActual.setUsuario(elUsuario);
            return
                    this.miRepositorioPermisosUsuario.save(permisosUsuarioActual);
        }else{
            return null;
        }
    }
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    public void delete(@PathVariable String id){
        PermisosUsuario permisosUsuarioActual=this.miRepositorioPermisosUsuario
                .findById(id)
                .orElse(null);
        if (permisosUsuarioActual!=null){
            this.miRepositorioPermisosUsuario.delete(permisosUsuarioActual);
        }
    }
}