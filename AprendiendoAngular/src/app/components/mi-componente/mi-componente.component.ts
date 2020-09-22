import { Component } from '@angular/core';

/**
 *  NOTA
 * No poner ; al final de Component IMPORTANTE
 */
@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente {
  public nombre: string;
  public apellido_1: string;
  public apellido_2: string;
  public edad: number;
  public idioma: string;
  public mostrarPeliculas: boolean;

  constructor(){
    console.log('Componente mi-componente cargado');
    //  Asignamos valores a las variables

      this.nombre = 'Adrián';
      this.apellido_1 = 'Vázquez';
      this.apellido_2 = 'Mirasierra';
      this.edad = 28;
      this.idioma = 'ES';
      this.mostrarPeliculas = true;
  }


  ocultarPeliculas(){
    this.mostrarPeliculas = false;
  }

}