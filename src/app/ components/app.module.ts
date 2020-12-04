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
import { ReptigisterComponent } from './reptigister/reptigister.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LogilienComponent } from './logilien/logilien.component';


@NgModule({
  declarations: [
    AppComponent,
    FlatEarthComponent,
    OnestpasdesmoutonsComponent,
    BillgatesComponent,
    AbonentendeurComponent,
    ReptilianprofileComponent,
    NoussachonsComponent,
    ComplotfacileComponent,
    ReptigisterComponent,
    LogilienComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
