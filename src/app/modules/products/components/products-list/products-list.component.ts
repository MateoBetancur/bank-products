import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/product.interface';
import { FIVE, ONE, TWO_HUNDRED, ZERO } from 'src/app/core/utils/number.constants';
import { Router } from '@angular/router';
import { catchError, take, tap, throwError } from 'rxjs';

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
    this.getData()
  }

  getData(): void {
    this.productsService.getProducts().pipe(
      take(ONE),
      tap((res: IProduct[]) => {
        this.productList = res;
        this.onFiltered()
      })
    ).subscribe()
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
      this.isOpenModal = false;
      this.isLoading = true;
      this.productsService.deleteProduct(this.idToDelete).pipe(
        take(ONE),
        tap(() => {
          this.isLoading = false;
          this.getData()
        }),
        catchError((err) => {
          this.isLoading = false;
          return throwError(() => err)
        })
      ).subscribe()
    } else {

      this.isOpenModal = false;
    }
  }


}
