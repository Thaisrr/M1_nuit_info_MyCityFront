import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ReptilianprofileComponent} from './reptilianprofile/reptilianprofile.component';
import {NoussachonsComponent} from './noussachons/noussachons.component';
import {BillgatesComponent} from './billgates/billgates.component';
import {ComplotfacileComponent} from './complotfacile/complotfacile.component';
import {OnestpasdesmoutonsComponent} from './onestpasdesmoutons/onestpasdesmoutons.component';
import {FlatEarthComponent} from './flat-earth/flat-earth.component';
import {ReptigisterComponent} from './reptigister/reptigister.component';
import {LogilienComponent} from './logilien/logilien.component';

const routes: Routes = [
  {path: 'profil', component: ReptilianprofileComponent},
  {path: 'mesincidents', component: NoussachonsComponent},
  {path: 'faq', component: NoussachonsComponent},
  {path: 'header', component: BillgatesComponent},
  {path: 'tuto', component: ComplotfacileComponent},
  {path: 'signalerincident', component: OnestpasdesmoutonsComponent},
  {path: 'inscription', component: ReptigisterComponent },
  {path: 'connexion', component: LogilienComponent },
  {path: '', component: FlatEarthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
