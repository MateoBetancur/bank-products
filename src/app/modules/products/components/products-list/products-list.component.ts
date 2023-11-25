import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/product.interface';
import { FIVE, TWO_HUNDRED, ZERO } from 'src/app/core/utils/number.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'bank-products-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  productList: IProduct[] = [];
  productListFiltered: IProduct[] = [];
  search = '';
  searchTimeout: any;
  productsAmount = FIVE;
  isLoading = true;
  isOpenModal = false;
  modalTxt!: string
  idToDelete!: string;
  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: IProduct[]) => {
      this.productList = res;
      this.onFiltered()
    })
  }

  onFiltered(): void {
    clearTimeout(this.searchTimeout)
    this.searchTimeout = setTimeout(() => {
      this.productListFiltered = this.productList.filter((product) => {
        if (product.name.includes(this.search)) {
          return product;
        }
        return null
      }).slice(ZERO, this.productsAmount)
      this.isLoading = false
    }, TWO_HUNDRED);
  }

  goToEdit(product: IProduct): void {
    this.productsService.setProdToEdit(product)
    this.router.navigateByUrl('/list/product');
  }

  onDelete(product: IProduct): void {
    this.idToDelete = product.id;
    this.modalTxt = `¿Estas seguro de eliminar el producto ${product.name}?`
    this.isOpenModal = true;
  }

  modalEvent(event: boolean): void {
    if (event) {

    } else {

      this.isOpenModal = false;
    }
  }


}
