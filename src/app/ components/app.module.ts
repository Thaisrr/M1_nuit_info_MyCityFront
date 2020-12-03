import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { OnestpasdesmoutonsComponent } from './onestpasdesmoutons/onestpasdesmoutons.component';
import { BillgatesComponent } from './billgates/billgates.component';
import { AbonentendeurComponent } from './abonentendeur/abonentendeur.component';
import { ReptilianprofileComponent } from './reptilianprofile/reptilianprofile.component';
import { NoussachonsComponent } from './noussachons/noussachons.component';
import { ComplotfacileComponent } from './complotfacile/complotfacile.component';

@NgModule({
  declarations: [
    AppComponent,
    OnestpasdesmoutonsComponent,
    BillgatesComponent,
    AbonentendeurComponent,
    ReptilianprofileComponent,
    NoussachonsComponent,
    ComplotfacileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
