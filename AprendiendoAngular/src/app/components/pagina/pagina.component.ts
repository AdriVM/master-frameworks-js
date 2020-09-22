import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
//Importante para los parámetros recibidos por GET
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombreGET : string;
  public apellidosGET : string;

  constructor( private _route : ActivatedRoute, private _router : Router ) {

   }

  ngOnInit(): void {

    //Recogemos los datos de la URL
    this._route.params.subscribe((params : Params) => {
      
      this.nombreGET = params.nombre;
      this.apellidosGET = params.apellidos;
      
    });

  }

  redireccion(){
    //Redirección Programática
    this._router.navigate(['/pagina-de-pruebas', 'Adrián', 'Vázquez Mirasierra']);
  }

}
