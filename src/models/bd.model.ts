export class BandeDessinnee {
    nom: string;
    nbPages: number;
    href: string;
    resume: string;
    date: Date | boolean;
    icon: string;
    chap_name?:string;

    constructor(nom: string, nbPages: number, href: string, resume: string, date: Date | boolean, icon: string, chap_name?: string) {
        this.nom = nom;
        this.nbPages = nbPages;
        this.href = href;
        this.resume = resume;
        this.date = date;
        this.icon = icon;
        if (chap_name) {
            this.chap_name = chap_name;
        }
    }
}

export class Bibliotheque {
    liste_bd: BandeDessinnee[];

    constructor();
    constructor(liste_bd: BandeDessinnee[]);
    constructor(liste_bd?: BandeDessinnee[]) {
        if (liste_bd) {
            this.liste_bd = liste_bd;
        } else {
            this.liste_bd = [];
        }
    }

    addBd(bd: BandeDessinnee) {
        this.liste_bd.push(bd);
    }

    getListeBD() : BandeDessinnee[]{
        return this.liste_bd;
    }
}