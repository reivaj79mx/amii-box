import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AddAmiiboDialogComponent } from './components/add-amiibo-dialog/add-amiibo-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (public dialog: MatDialog) {}

  openAddAmiiboModal(): void {
    const dialogRef = this.dialog.open(AddAmiiboDialogComponent, {
      width: '500px',
      data: {}
    });
  }

}
