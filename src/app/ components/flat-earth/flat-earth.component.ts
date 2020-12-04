import { Component, OnInit } from '@angular/core';
import {Incident} from '../../tools/classes/Incident';
import {NoussachonsService} from '../../tools/services/noussachons.service';
import {ImageService} from '../../tools/services/image.service';
import {Category} from '../../tools/classes/Category';

@Component({
  selector: 'app-flat-earth',
  templateUrl: './flat-earth.component.html',
  styleUrls: ['./flat-earth.component.css']
})
export class FlatEarthComponent implements OnInit {
  complotsEnEtude: Incident[] = [];
  complotsAEtudier: Incident[] = [];

  constructor(
    private nous_sachons: NoussachonsService,
    private imgService: ImageService
  ) { }

  ngOnInit(): void {
    const info = new Incident();
    info.description = 'Description de mon incident, blablabla';
    info.titre = 'Un problème quelque part';
    info.statut = 'en attente';
    const cat = new Category();
    cat.nom = 'Problème';
    info.category = cat;

    this.complotsEnEtude.push(info);
    this.complotsAEtudier.push(info);
  }

  setEnEtude(): void {
    this.nous_sachons.getByStatus('en cours').subscribe(infos => {
      this.complotsEnEtude = infos;
      this.imgService.setIncidentImage(this.complotsEnEtude);
    } );
  }

  setEnAttente(): void {
    this.nous_sachons.getByStatus('en attente').subscribe(infos => {
      this.complotsAEtudier = infos;
      this.imgService.setIncidentImage(this.complotsAEtudier);
    } );
  }

  isLoggedFrancMacon(): boolean {
    return false;
  }

  isLoggedMouton(): boolean {
    return true;
  }

  changeStatus(info: Incident, status: string): void {
    info.statut = status;
    this.nous_sachons.update(info).subscribe(_ => console.log('Info status updated'));
  }

  like(info: Incident): void {
    info.likes++;
    this.nous_sachons.update(info).subscribe(_ => 'like added ! ');
  }

  deleteInfo(info: Incident): void {
    this.nous_sachons.delete(info).subscribe(_ => 'deleted !');
  }
}
