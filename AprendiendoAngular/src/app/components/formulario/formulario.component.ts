import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: User;

  //EVENTOS
  public campo: string

  constructor() {

    this.user = {
      "name": '',
      "surnames": '',
      "biography": '',
      "gender": ''
    };


  }

  ngOnInit(): void {
  }


  onSubmit() {
    
    console.log(this.user);

  }

  hasDadoClick(){
    alert('¡Has usado el evento click para llamar a la función hasDadoClick()!');
  }

  hasSalido(campo){
    if(campo == '' || campo == undefined){
      alert('¡Has usado el evento blur para llamar a la función hasSalido()!\<br>\ El campo está vacío.');
    }else{
      alert('¡Has usado el evento blur para llamar a la función hasSalido()!\<br>\ El campo está relleno: '+ campo);
    }
   
  }

  hasDadoEnter(){
    alert('¡Has usado el evento keyUp.enter para llamar a la función hasDadoEnter()!');
  }

}
