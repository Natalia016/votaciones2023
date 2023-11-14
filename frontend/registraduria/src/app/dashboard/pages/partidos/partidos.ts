import { ObjectId } from "mongodb";

export interface Partidos{
    _id?:ObjectId;
    lema?:string;
    nombre?:string;
    
}