import { ObjectId } from "mongodb";

export interface Candidatos{
    id?:ObjectId;
    cedula?:string;
    numero_resolucion?:string;
    Nombre?:string;
    Apellido?:string;
    Imagen?:String;

}