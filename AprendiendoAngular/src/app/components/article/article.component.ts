import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
          } else {
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

  delete(id) {

    //ALERTA
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Si aceptas se eliminará para siempre.",
      icon: 'warning',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: '#179613',
      cancelButtonColor: '#C91515',
      confirmButtonText: '¡Eliminalo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        //Borramos
        this._articleService.delete(id).subscribe(
          response => {
            Swal.fire(
              '!Artículo Eliminado¡',
              'El artículo ha sido eliminado correctamente.',
              'success'
            ).then((result2) => {
              if (result2.isConfirmed) {
                this._router.navigate(['/blog']);
              }
            });
          },
          error => {
            console.log(error);
            //ALERTA
            Swal.fire({
              icon: 'error',
              title: 'Fallo en la Eliminación',
              text: 'Error al borrar el artículo: ' + error
            }).then((result) => {
              if (result.isConfirmed) {
                this._router.navigate(['/blog']);
              }
            });
            
          }
        );

      }//end if
    });


  }

}
