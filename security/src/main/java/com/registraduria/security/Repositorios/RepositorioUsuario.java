package com.registraduria.security.Repositorios;
import com.registraduria.security.Modelos.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface RepositorioUsuario extends MongoRepository<Usuario,String> {
}
