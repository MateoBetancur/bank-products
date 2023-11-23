import { Route } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

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
