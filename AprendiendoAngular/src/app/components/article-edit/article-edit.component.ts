import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: String;
  public url: string;
  public is_edit: boolean;
  public slider_title: String;
  public page_title: String;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'upload-image',
      method: "POST",
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Seleccionar Imagen',
      resetBtn: 'Borrar',
      uploadBtn: 'Subir',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el artículo...',
      afterUploadMsg_success: '¡Subida correcta!',
      afterUploadMsg_error: '¡Error en la subida!',
      sizeLimit: 'Tamaño límite'
    }
  };

  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {

    //Inicializamos el artículo vacío
    this.article = new Article('', null, '', '', '');

    this.is_edit = true;
    this.url = Global.url;
    this.slider_title = 'Editar Artículo';
    this.page_title = 'Formulario de Edición';

  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {

    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status == 'success') {

          this.status = 'success';
          this.article = response.article;
          this._router.navigate(['/blog/articulo', this.article._id]);

        } else {

          this.status = 'error';

        }

      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  imageUpload(data){
    let image_data = data.body;
    this.article.image = image_data.image;
  }

  getArticle(){
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
