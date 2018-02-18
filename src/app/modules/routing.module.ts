import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmiiboListComponent } from '../components/amiibo-list/amiibo-list.component';

const routes: Routes = [
  { path: '', component: AmiiboListComponent }
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
