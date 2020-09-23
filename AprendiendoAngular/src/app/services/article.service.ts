import { Injectable } from '@angular/core';
//comunicacion con el Backend
import { HttpClient, HttpHeaders } from '@angular/common/http';
//recoger los datos que nos devulve el API
import { Observable } from 'rxjs';
//Nuestro Modelo
import { Article } from '../models/article';
//Importamos Global (variable que creamos que nos guarda la URL del API)
import { Global } from './global';

@Injectable()
export class ArticleService {

    public url: string;

    constructor(
        private _httpClient: HttpClient 
    ){
        this.url = Global.url;
    }


    pruebas(){
        return 'Soy el servicio de artículos';
    }


    //Indicamos el tipo que nos va a devolver (:Observable<any>)
    getArticles():Observable<any>{
        return this._httpClient.get(this.url+'articles');
    }

}