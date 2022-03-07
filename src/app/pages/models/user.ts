import { RoleList } from "./roleList";

export interface User {   
    id?:number;
    prenom: string;
    nom: string;
    email: string;
    password?: string;
    preference ?: object;
    roleList ?: string[];
}
