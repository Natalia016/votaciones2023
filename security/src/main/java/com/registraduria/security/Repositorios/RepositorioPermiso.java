package com.registraduria.security.Repositorios;
import com.registraduria.security.Modelos.Permisos;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface RepositorioPermiso extends MongoRepository<Permisos,String> {
}
