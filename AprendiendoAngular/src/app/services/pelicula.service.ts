//Añade un decorador a la clase que permite crear los servicios sin tener que hacer el new, inyectandolo en un provider de mi componente
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

//Indicamos que es un servicio
@Injectable()
export class PeliculaService {

    public films: Array<Pelicula>

    constructor(){
        this.films = [
            /*{ "title": "Spiderman 4", "image": 'https://sm.ign.com/ign_es/screenshot/default/proto1_58f7.jpg', year: 2012 },
            { "title": "Los Vengadores Endgame", "image": 'https://okdiario.com/img/2019/03/01/endgame-655x368.jpg', year: 2019 },
            { "title": "Thor Ragnarok", "image": 'https://i.blogs.es/418197/cartel-thor-rganarok/1366_2000.jpg', "year": 2017 },
            { "title": "The Batman", "image": 'https://as.com/meristation/imagenes/2020/08/20/noticias/1597955878_823370_1597955909_noticia_normal_recorte1.jpg', year: 2021 }*/
            /* los meses empiezan en 0;
              0 = Enero,
              1 = Febrero,
              2 = Marzo,
              3 = Abril,
              4 = Mayo,
              5 = Junio,
              6 = Julio,
              7 = Agosto
              8 = Septiembre
              9 = Octubre
              10 = Noviembre
              11 = Diciembre
            */
      
            new Pelicula("Spiderman 4", "https://sm.ign.com/ign_es/screenshot/default/proto1_58f7.jpg", new Date(2012,5,13)),
            new Pelicula("Los Vengadores Endgame", "https://okdiario.com/img/2019/03/01/endgame-655x368.jpg", new Date(2019,3,26)),
            new Pelicula("Thor Ragnarok", "https://i.blogs.es/418197/cartel-thor-rganarok/1366_2000.jpg", new Date(2017,9,10)),
            new Pelicula("The Batman", "https://as.com/meristation/imagenes/2020/08/20/noticias/1597955878_823370_1597955909_noticia_normal_recorte1.jpg", new Date(2021,9,1))
          ];
    }

    holaMundo(){
        return 'Hola Mundo desde un servicio de Angular';
    }

    getFilms(){
        return this.films;
    }
}