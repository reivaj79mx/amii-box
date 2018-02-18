import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './modules/material.module';
import { RoutingModule } from './modules/routing.module';

// components
import { AppComponent } from './app.component';
import { AmiiboListComponent } from './components/amiibo-list/amiibo-list.component';

// services
import { AmiiboService } from './services/amiibo.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AmiiboListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [AmiiboService],
  bootstrap: [AppComponent]
})
export class AppModule { }
