import {Restaurant} from './restaurant/restaurant.model'
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'
import {MEAT_API} from '../app.api'

import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Observable} from  'rxjs/Observable'

@Injectable()
//para receber o serviço via injeção de dependência usa-se o decorator @Injectable
export class RestaurantsService{

  constructor(private http: HttpClient){}

  //método
  restaurants(search?:string) : Observable<Restaurant[]> {
    let params: HttpParams = undefined
    if(search){
      params = new HttpParams().set('q', search)
    }
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})

  }

  restaurantById(id: string) : Observable<Restaurant>{
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
  }

//versao anteriores ao @angular 4.3 - usando Http e não HttpClient

  // menuOfRestaurant(id: string): Observable<MenuItem[]>{
  //   return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
  //   .map(response => response.json())
  //   .catch(ErrorHandler.handleError)
  // }

  // restaurants(search?:string) : Observable<Restaurant[]> {
  //   return this.http.get(`${MEAT_API}/restaurants`, {params: {q:search}})
  //   .map(response=>response.json())
  //   .catch(ErrorHandler.handleError)
  //   pegar apenas o json do objeto response
  //   tratar erro criando a classe ErrorHandler
  // }
}
