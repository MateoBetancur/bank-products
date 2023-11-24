import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL_BASE = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products'
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.URL_BASE)
  }
}
