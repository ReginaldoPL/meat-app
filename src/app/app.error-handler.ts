import {Response} from '@angular/http'
import { IfObservable } from 'rxjs/observable/IfObservable';

export class ErrorHandler {
    static handleError(error: Response | any){
        let errorMessage: string

        if(error instanceof Response) {
            errorMessage= `Erro ${error.status} ao acessar a ${error.url} - ${error.statusText}`


        }else{
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        return IfObservable.throw(errorMessage)

    }
}