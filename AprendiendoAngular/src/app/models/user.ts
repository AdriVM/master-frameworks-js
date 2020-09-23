//hacemos el export para poder hacer uso de la clase fuera
export class User {

    constructor(
        public name: string,
        public surnames: string,
        public biography: string,
        public gender: string
    ){}
}