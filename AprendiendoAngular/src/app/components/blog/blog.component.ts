import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Array<Article>;
  public url: string;

  constructor(
    private _articleService: ArticleService
  ) { 

    this.url = Global.url;

  }

  ngOnInit(): void {
    //console.log(this._articleService.pruebas());

    //Lamada AJAX al Backend
    this._articleService.getArticles().subscribe(
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
