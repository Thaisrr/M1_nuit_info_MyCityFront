import {User} from './User';
import {Category} from './Category';

export class Incident {
  incident_id: number;
  auteur: User;
  category: Category;
  titre: string;
  description: string;
  adresse: string;
  ouverture: Date;
  fermeture: Date;
  statut: string;
  image: string; // Uniquement pour le front
  likes: number;
}
