import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'bank-products-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  productList!: IProduct[];
  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: IProduct[]) => {
      console.log(res);
      this.productList = res;
    })
  }
}
