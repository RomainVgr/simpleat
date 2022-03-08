export interface Restaurant {
    id?:number;
    nom: string;
    adresse: string;
    prix?: number;
    latitude: string;
    longitude: string;
    telephone ?: string;
    website ?: string;
    aEmporter?: boolean | string;
    accesPMR?: boolean | string;
    surPlace?: boolean | string;
    typerestaus ?: [{id : number}];
}

export const EMPTY_RESTAU = {
    nom: '',
    adresse: '',
    prix: 0,
    latitude: '',
    longitude: '',
    telephone : '',
    website : '',
    aEmporter: '',
    accesPMR: '',
    surPlace: '',
    typerestaus : undefined
}