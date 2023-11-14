import { ObjectId } from 'mongodb';
export interface Usuarios{
    _id?:ObjectId,
    seudonimo?:string;
    correo?:string;
    contrasena?:string,
    estado?:Boolean,
}