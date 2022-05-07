import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prodInDetails: Product | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    // Has to match the param name in app.module.ts ('product.ID')
    const productIdFromRoute = Number(routeParams.get('productID'));

    // Find the product that correspond with the id provided in route.
    this.prodInDetails = products.find(product => product.id === productIdFromRoute);
  }

}
