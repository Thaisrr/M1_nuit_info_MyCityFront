import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlatEarthComponent } from './flat-earth/flat-earth.component';

import { OnestpasdesmoutonsComponent } from './onestpasdesmoutons/onestpasdesmoutons.component';
import { BillgatesComponent } from './billgates/billgates.component';
import { AbonentendeurComponent } from './abonentendeur/abonentendeur.component';
import { ReptilianprofileComponent } from './reptilianprofile/reptilianprofile.component';
import { NoussachonsComponent } from './noussachons/noussachons.component';
import { ComplotfacileComponent } from './complotfacile/complotfacile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FlatEarthComponent,
    OnestpasdesmoutonsComponent,
    BillgatesComponent,
    AbonentendeurComponent,
    ReptilianprofileComponent,
    NoussachonsComponent,
    ComplotfacileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
