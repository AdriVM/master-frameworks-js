import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Array<Article>;
  public search: String;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
    ) { 



  }

  ngOnInit(): void {

    //Recogemos los parámetros de la URL
    this._route.params.subscribe( params =>{

      //Nombre del parámetro
      this.search = params['search'];
      
      //Sacamos los Articulos que coincidan con nuestra búsqueda
      this._articleService.search(this.search).subscribe( 
        response => {
          if(response.articles){
            this.articles = response.articles;
          }else{
            this.articles = [];
          }
        },
        error => {
          console.log(error);
          this.articles = [];
        }
        
        );

    });

  }

}
