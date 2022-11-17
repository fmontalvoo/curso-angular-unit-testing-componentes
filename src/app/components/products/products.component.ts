import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';

import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  limit = 10;
  offset = 0;
  status: 'init' | 'loading' | 'success' | 'error' = 'init';

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.status = 'loading';
    this.productService.getAll(this.limit, this.offset)
      .subscribe({
        next: products => {
          this.status = 'success';
          this.offset += this.limit;
          this.products = this.products.concat(products);
        },
        error: e => {
          this.status = 'error';
        }
      });
  }

}
