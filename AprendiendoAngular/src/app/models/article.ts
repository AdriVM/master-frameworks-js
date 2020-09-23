export class Article{

        /*
            "_id": "5f59f680be17d948b07d430e",
            "date": "2020-09-10T09:48:48.815Z",
            "title": "Quinto articulo",
            "content": "Contenido del quinto articulo",
            "image": null,
    */

    constructor(
        public _id: string,
        public date: Date,
        public title: string,
        public content: string,
        public image: string
    ){}

}