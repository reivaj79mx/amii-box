import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
