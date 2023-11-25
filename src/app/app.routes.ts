import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
    {
        path: 'list',
        loadChildren: () => import('./modules/products/products.module').then((m) => m.ProductsModule)
    },
    {
        path: '**',
        redirectTo: ''
    },
];
