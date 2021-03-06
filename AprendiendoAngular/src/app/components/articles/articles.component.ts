import { Component, OnInit, Input } from '@angular/core';
import { Global } from '../../services/global';
import { Article } from '../../models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Article[];
  public url: string;

  constructor() { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    
  }

}
