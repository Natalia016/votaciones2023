package com.registraduria.security.Repositorios;

import com.registraduria.security.Modelos.PermisosUsuario;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RepositorioPermisosUsuario extends MongoRepository<PermisosUsuario,String> {

}
