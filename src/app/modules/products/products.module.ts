import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
// import { productRoutes } from './products.routes';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
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
  imports: [CommonModule, RouterModule.forChild(productRoutes)],
})
export class ProductsModule { }
