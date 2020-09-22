import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public estreno: Date;
  public estreno_format: Array<string>;
  public hace: Array<number>;
  public mostrar: boolean;


  public films: Array<Pelicula>;


  public favorita: Pelicula;



  constructor(private datePipe: DatePipe) { 
    console.log('constructor LANZADO!!');

    this.titulo = 'El señor de los anillos: La comunidad del Anillo';
    this.estreno = new Date('2001-12-19');
    this.estreno_format = [];
    this.mostrar = false;
    this.hace = [];

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

  //  Esta directiva se ejecuta cuando usamos la etiqueta de nuestro componente
  ngOnInit(): void {
    console.log('ngOnInit LANZADO!!');

    for (let i = 0; i < this.films.length; i++) {
      const element = this.films[i];

      this.estreno_format[i] = this.datePipe.transform(element.year, "d/M/y");

      let year_premiere = element.year.getFullYear();
      let today = new Date();
      let this_year = today.getFullYear();

      this.hace[i] = this_year - year_premiere;

      console.log(this.hace[i]);
      

    };
    console.log(this.films);
    
  }

  //  Se ejecuta cuando hay cualquier tipo de cambio
  ngDoCheck(): void {
    console.log('ngDoCheck LANZADO!!');
  }

  mostrarPelicula(){
    this.mostrar = true;
  }

  //  Se ejecuta cuando se destruye el componente
  ngOnDestroy(): void {
    console.log('ngOnDestroy LANZADO!!');
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }
}
