export class CompteBancaire {
    constructor() {
        this.solde = 0; // Solde initialisé à 0
    }

    deposer(montant) {
        if (montant > 0) {
            this.solde += montant;
        } else {
            console.error("Le montant déposé doit être positif.");
        }
    }

    retirer(montant) {
        if (montant > 0) {
            if (this.solde >= montant) {
                this.solde -= montant;
            } else {
                console.error("Fonds insuffisants pour effectuer ce retrait.");
            }
        } else {
            console.error("Le montant retiré doit être positif.");
        }
    }

    afficherSolde() {
        console.log(`Solde actuel : ${this.solde} euros`);
    }
}