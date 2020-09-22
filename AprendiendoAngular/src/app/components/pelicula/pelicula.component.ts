import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() film: Pelicula;
  @Input() i: number;
  @Input() estreno_format: string;
  @Input() hace: number;

  //Output es para enviar datos del componente hijo al componente padre
  @Output() MarcarFavorita = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event, film){
    this.MarcarFavorita.emit({
      "pelicula": film
    });
  }

}
