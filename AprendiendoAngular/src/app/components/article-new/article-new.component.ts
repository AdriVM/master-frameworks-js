import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: String;
  public is_edit: boolean;
  public slider_title: String;
  public page_title: String;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:Global.url+'upload-image',
      method:"POST",
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

    this.is_edit = false;
    this.slider_title = 'Crear Artículo';
    this.page_title = 'Formulario de Creación';

  }




  ngOnInit(): void {
  }

  onSubmit() {

    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {

          this.status = 'success';
          this.article = response.article;

          //ALERTA
          Swal.fire({
            icon: 'success',
            title: '¡Artículo Creado!',
            text: 'El artículo se ha creado correctamente :)'
          }).then((result) => {
            if (result.isConfirmed) {
              this._router.navigate(['/blog']);
            } 
          });

          
        } else {

          this.status = 'error';

        }

      },
      error => {
        console.log(error);
        this.status = 'error';
        //ALERTA
        Swal.fire({
          icon: 'error',
          title: 'Fallo en la creación',
          text: 'Error al crear el artículo: '+error
        });
      }
    );
  }

  imageUpload(data){
    let image_data = data.body;
    this.article.image = image_data.image;
  }

}
