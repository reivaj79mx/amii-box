import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmiibosOwnComponent } from '../components/amiibos-own/amiibos-own.component';

const routes: Routes = [
  {
    path: '',
    component: AmiibosOwnComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
