import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
//Para coger el parámetro de la URL
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {

    //Recogemos el dato que nos llega de la URL
    this._route.params.subscribe(params => {
      let id = params['id'];

      //Lamada AJAX al Backend
      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            console.log(response.article);
            this.article = response.article;
          }else{
            this._router.navigate(['/404']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/404']);
        }
      );

    });

  }

}
