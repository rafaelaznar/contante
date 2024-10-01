import { Routes } from '@angular/router';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { ComponenteNuevasDirectivasComponent } from './components/componente-nuevas-directivas/componente-nuevas-directivas.component';

export const routes: Routes = [
  { path: 'componente1', component: Componente1Component },
  { path: 'componente2', component: Componente2Component },
  { path: 'componente3/:min/:max', component: Componente3Component },
  { path: 'directivas', component: ComponenteNuevasDirectivasComponent },
];
