import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public titulo: string;
  public articles: Array<Article>;

  constructor( private _articleService: ArticleService ) { 
    this.titulo = 'Últimos artículos';
  }

  ngOnInit(): void {

      //Lamada AJAX al Backend
      //pasando a getArticles true, o cualquiero otra cosa, decimos que nos saque los ultimos articulos definidos en nuestro servicio
      this._articleService.getArticles(true).subscribe(
        response => {
          if(response.articles){
            this.articles = response.articles;
          }
        },
        error => {
          console.log(error);
        }
    );
  }
  

}
