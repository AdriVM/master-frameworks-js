import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Pelicula } from '../../models/pelicula';
//Importamos nuestro servicio
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public estreno: Date;
  public estreno_format: Array<string>;
  public hace: Array<number>;
  public mostrar: boolean;


  public films: Array<Pelicula>;


  public favorita: Pelicula;



  constructor(
    private _datePipe: DatePipe,
    private _peliculaService: PeliculaService
    ) { 
    console.log('constructor LANZADO!!');

    this.titulo = 'El señor de los anillos: La comunidad del Anillo';
    this.estreno = new Date('2001-12-19');
    this.estreno_format = [];
    this.mostrar = false;
    this.hace = [];

    this.films = _peliculaService.getFilms();

  }

  //  Esta directiva se ejecuta cuando usamos la etiqueta de nuestro componente
  ngOnInit(): void {
    console.log('ngOnInit LANZADO!!');

    for (let i = 0; i < this.films.length; i++) {
      const element = this.films[i];

      this.estreno_format[i] = this._datePipe.transform(element.year, "d/M/y");

      let year_premiere = element.year.getFullYear();
      let today = new Date();
      let this_year = today.getFullYear();

      this.hace[i] = this_year - year_premiere;
    };//END FOR
    console.log(this._peliculaService.holaMundo());
    
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
