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
    // Reutilizamos el método para sacar los ultimos articulos del backend
    getArticles(last: any = null):Observable<any>{

        var articles = 'articles';
        console.log(last);
        if(last != null){
            //Sacamos los ultimos articulos; el nº despues de la barra indica la cantidad de articulos a mostrar, pasamos 5 porque queremos que salgan 5.
            articles = 'articles/5';
        }

        return this._httpClient.get(this.url+articles);
    }


    getArticle(id):Observable<any>{

        return this._httpClient.get(this.url+'article/'+id);
    }


    search(searchString):Observable<any>{

        return this._httpClient.get(this.url+'search/'+searchString);

    }


}