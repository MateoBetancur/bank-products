import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
    },
    {
        path: 'products',
        loadChildren: () => import('./modules/products/products.module').then((m) => m.ProductsModule)
    },
    {
        path: '**',
        redirectTo: ''
    },
];
