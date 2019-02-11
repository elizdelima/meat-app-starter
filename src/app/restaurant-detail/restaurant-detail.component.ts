import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../restaurants/restaurants.service'

import {ActivatedRoute} from '@angular/router'
//fornece a url ativa e os parametros passados

import {Restaurant} from '../restaurants/restaurant/restaurant.model'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})

export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant
  constructor(private RestaurantsService: RestaurantsService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.RestaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
