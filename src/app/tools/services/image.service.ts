import { Injectable } from '@angular/core';
import {Incident} from '../classes/Incident';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  setIncidentImage(incidents: Incident[]) {
    incidents.forEach(i => {
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-POjn3OOoUHRiGQc8pVMA1jmLQfRvNU6jA&usqp=CAU';
      if (i.category.nom === '') { return ''; }
      if (i.category.nom === '') { return ''; }
      if (i.category.nom === '') { return ''; }
      if (i.category.nom === '') { return ''; }
      if (i.category.nom === '') { return ''; }
    });
  }
}
