export interface User {   
    id?:number;
    prenom: string;
    lastName: string;
    email: string;
    password?: string;
    preference ?: object;
}
