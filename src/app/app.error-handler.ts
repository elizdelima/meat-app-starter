import {HttpErrorResponse} from '@angular/common/http'
import {Observable} from  'rxjs/Observable'
import 'rxjs/add/Observable/throw'

export class ErrorHandler{

  static handleError(error: HttpErrorResponse | any){
    let errorMessage: string
    if(error instanceof HttpErrorResponse){
      const body = error = error.error
      errorMessage=`${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
    }else{
        errorMessage = error.toString()
    }
    console.log(errorMessage)
    return Observable.throw(errorMessage)

  }

  // versao anteriores ao @angular 4.3 - usando Http e não HttpClient

  //static handleError(error:Response | any){
  //   let errorMessage: string
  //   if(error instanceof Response){
  //      const body = error.json() || ''
  //      const err = body.error || Json.stringify(body)
  //      errorMessage=`${error.url}: ${error.status} - ${error.statusText || ''} ${error}`
  //   }else{
  //       errorMessage = error.message ? error.message : error.toString()
  //   }
  //   console.log(errorMessage)
  //   return Observable.throw(errorMessage)
  //
  // }
}
