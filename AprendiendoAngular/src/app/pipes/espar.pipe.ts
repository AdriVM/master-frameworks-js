import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    "name": 'espar' 
})

export class EsParPipe implements PipeTransform{

    transform(value: any) {

        let year = value.getFullYear();
        let esPar = "no es Par";

        if(year % 2 == 0){
           esPar = "es Par";
        }

        return "El año "+ year + " "+ esPar;
        
    }

}