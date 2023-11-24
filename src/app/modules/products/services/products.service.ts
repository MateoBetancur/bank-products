import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL_BASE = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products'
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.URL_BASE)
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(this.URL_BASE, product)
  }

  verifyId(id: string): Observable<boolean> {

    return this.httpClient.get<boolean>(`${this.URL_BASE}/verification`, {
      params: {
        id
      }
    })
  }

  validateData(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const id = control.value;

      return this.verifyId(id).pipe(
        map((isInValid: boolean) => {
          
          return (isInValid ? { invalidId: true } : null)
        }),
        catchError(() => of(null))
      );
    };
  }
}
