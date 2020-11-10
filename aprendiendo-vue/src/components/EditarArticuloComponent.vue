<template src="./CrearArticulo.html"></template>
<script>
//Importamos axios para hacer peticiones AJAX al backend
import axios from "axios";
import Global from "../Global";

//Importamos nuestro modelo de articulos
import Article from "../models/Article";

import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
//validaciones
import { required } from "vuelidate/lib/validators";

//importamos sweetalert2
import swal from "sweetalert2";

export default {
  name: "EditarArticuloComponent",
  data() {
    return {
      tituloForm: null,
      url: Global.url,
      article: new Article("", "", null, ""),
      submitted: false,
      file: "",
      fileError: false,
      isEdit: true,
    };
  },
  validations: {
    article: {
      title: {
        required,
      },
      content: {
        required,
      },
    },
  },
  components: {
    SliderComponent,
    SidebarComponent,
  },
  mounted() {
    this.tituloForm = "Edición de Artículo";
    var articleID =  this.$route.params.id;
    this.getArticle(articleID);
  },
  methods: {
      getArticle(articleID) {
      axios.get(this.url + "article/" + articleID).then((res) => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
    save() {
      this.submitted = true;

        //Recogemos el id del articulo de la URL
        var articleID =  this.$route.params.id;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.url + "article/" + articleID, this.article)
          .then((res) => {
            if (res.data.status == "success") {
              //subida de archivo

              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);
                //Sacamos el id de el articulo que acabamos de crear
                var articleID = res.data.article._id;
                axios
                  .post(this.url + "upload-image/" + articleID, formData)
                  .then((res) => {
                    if (res.data.article) {
                      swal
                        .fire({
                          title: "Edición Correcta",
                          text: "El artículo con imagen ha sido editado correctamente.",
                          icon: "success",
                          confirmButtonText: "¡Genial!",
                        })
                        .then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            this.article = res.data.article;
                            //redireccionamos al blog
                            this.$router.push("/articulo/"+ this.article._id);
                          }
                        });
                    } else {
                      //Mostramos alerta de error
                      swal
                      .fire({
                          title: "Algo fue mal :(",
                          text: "El artículo no se ha editado correctamente.",
                          icon: "error",
                          confirmButtonText: "Aceptar",
                        })
                    }
                  })
                  .catch((error) => {
                    this.fileError = true;
                    console.log(error);
                  });
              } else {
                swal
                  .fire({
                    title: "Edición Correcta",
                    text: "El artículo ha sido editado correctamente.",
                    icon: "success",
                    confirmButtonText: "¡Genial!",
                  })
                  .then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      this.article = res.data.article;
                      //redireccionamos al blog
                      this.$router.push("/articulo/" + this.article._id);
                    }
                  });
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
  },
};
</script>