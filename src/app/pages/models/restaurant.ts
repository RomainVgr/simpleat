export interface Restaurant {
    id?:number;
    nom: string;
    adresse: string;
    prix?: number;
    latitude: string;
    longitude: string;
    telephone ?: string;
    website ?: string;
    aEmporter?: boolean;
    accesPMR?: boolean;
    surPlace?: boolean;
}
