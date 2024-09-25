import { Routes } from '@angular/router';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';

export const routes: Routes = [
    {path: 'componente1', component: Componente1Component},
    {path: 'componente2', component: Componente2Component},
];
