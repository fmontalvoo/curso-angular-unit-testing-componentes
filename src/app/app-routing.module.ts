import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonComponent } from './components/person/person.component';
import { ProductsComponent } from './components/products/products.component';
import { PicoPreviewComponent } from './components/pico-preview/pico-preview.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'person',
    component: PersonComponent
  },
  {
    path: 'preview',
    component: PicoPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
