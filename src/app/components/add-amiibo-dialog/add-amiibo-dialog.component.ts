import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInput } from '@angular/material';

import { AmiiboService } from '../../services/amiibo.service';
import { Amiibo } from '../../models/amiibo.model';

@Component({
  selector: 'app-add-amiibo-dialog',
  templateUrl: './add-amiibo-dialog.component.html',
  styleUrls: ['./add-amiibo-dialog.component.scss']
})
export class AddAmiiboDialogComponent implements OnInit {

  @ViewChild('image') image;

  public series = [];
  public nuevo: Amiibo = new Amiibo('', '', '', null, false);

  constructor (
    public dialogRef: MatDialogRef<AddAmiiboDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private amiiboService: AmiiboService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectFile(ev) {
    this.nuevo.image = ev.target.files[0].name;
    // console.log(this.nuevo);
  }

  ngOnInit() {
    this.amiiboService.getSeries()
      .subscribe((serie: string) => { this.series.push(serie); });
  }

  /**
   * Envia la información del Amiibo para agregarlo a la DB
   */
  addAmiibo() {
    const native = this.image.nativeElement;

    if (native.files && native.files[0]) {
      const formData: FormData = new FormData();
      formData.append('file', native.files[0], native.files[0].name);
      formData.append('serie', this.nuevo.serie);
      formData.append('name', this.nuevo.name);
      formData.append('image', native.files[0].name);
      formData.append('date', new Date(this.nuevo.date).toISOString());
      formData.append('own', 'false');

      this.amiiboService.addAmiibo(formData).subscribe();
    }
  }

}
