import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatMenuModule,
  MatRadioModule,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
