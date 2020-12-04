import { Injectable } from '@angular/core';
import {Incident} from '../classes/Incident';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  setIncidentImage(incidents: Incident[]) {
    incidents.forEach(i => {
      if (i.category.nom === '') { return ''; }
      if (i.category.nom === '') { return ''; }
      if (i.category.nom === '') { return ''; }
      if (i.category.nom === '') { return ''; }
      if (i.category.nom === '') { return ''; }
    });
  }
}
