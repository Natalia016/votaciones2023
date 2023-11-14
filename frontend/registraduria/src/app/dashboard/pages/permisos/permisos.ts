import { ObjectId } from "mongodb";

export interface Permisos{
    _id?:ObjectId;
    url:string;
    metodo:string;
    
}