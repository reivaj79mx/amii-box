import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';
import { RoutingModule } from './modules/routing.module';

// components
import { AppComponent } from './app.component';
import { AmiiboListComponent } from './components/amiibo-list/amiibo-list.component';
import { AddAmiiboDialogComponent } from './components/add-amiibo-dialog/add-amiibo-dialog.component';

// services
import { AmiiboService } from './services/amiibo.service';
import { FilterPipe } from './pipes/filter.pipe';
import { SortAmiiboPipe } from './pipes/sort-amiibo.pipe';
import { DateAdapter, MatNativeDateModule } from '@angular/material';

// components
import { AmiibosOwnComponent } from './components/amiibos-own/amiibos-own.component';

@NgModule({
  declarations: [
    AppComponent,
    AmiiboListComponent,
    FilterPipe,
    SortAmiiboPipe,
    AddAmiiboDialogComponent,
    AmiibosOwnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddAmiiboDialogComponent
  ],
  providers: [
    AmiiboService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
