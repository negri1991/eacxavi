import { Routes } from '@angular/router';
import { ContacteComponent } from './contacte/contacte.component';

export const routes: Routes = [
  { path: 'contacte', component: ContacteComponent },
  { path: '', redirectTo: '/contacte', pathMatch: 'full' } // Ruta arrel redireccionarà a /contacte
];
