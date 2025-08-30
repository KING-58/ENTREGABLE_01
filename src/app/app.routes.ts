import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index';
import { CarritoComponent } from './components/carrito/carrito';
import { DeliveryComponent } from './components/delivery/delivery';
import { EntregasComponent } from './components/entregas/entregas';
import { ContactoComponent } from './components/contacto/contacto';


export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'entregas', component: EntregasComponent },
  { path: 'contacto', component: ContactoComponent },

];

