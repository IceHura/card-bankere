import { CompteBancaire } from './CompteBancaire.js';

// Crée une instance de CompteBancaire
const monCompte = new CompteBancaire();

// Déposez 100 euros
monCompte.deposer(100);

// Retirez 30 euros
monCompte.retirer(30);

// Affichez le solde final
monCompte.afficherSolde();
