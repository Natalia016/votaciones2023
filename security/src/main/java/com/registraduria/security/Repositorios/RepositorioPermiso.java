package com.registraduria.security.Repositorios;
import com.registraduria.security.Modelos.Permisos;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface RepositorioPermiso extends MongoRepository<Permisos,String> {
    @Query("{'url':?0,'metodo':?1}")
    Permisos getPermiso(String url, String metodo);
}
