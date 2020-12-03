import {Incident} from './Incident';

export class User {
  utilisateur_id: number;
  nom: string;
  prenom: string;
  email: string;
  mdp: string;
  role: string;
  alerts: boolean;
  incidents: Incident[];
}
