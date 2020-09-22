import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  //@input es para importar la directiva que hemos creado con nombreEjemplo en el app.component.html
  @Input() nombreEjemplo: string;

  @Input() size: string;

  constructor() { }

  ngOnInit(): void {
  }

}
