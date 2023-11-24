import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
// import { productRoutes } from './products.routes';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ReactiveFormsModule } from '@angular/forms';
export const productRoutes: Route[] = [

  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'add',
    component: ProductFormComponent
  },
  {
    path: 'edit/:id',
    component: ProductFormComponent
  }
];

@NgModule({
  declarations: [ProductsListComponent, ProductFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    NgOptimizedImage,
    ReactiveFormsModule
  ],
})
export class ProductsModule { }
