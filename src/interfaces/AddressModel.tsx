import { ClientModel } from "./ClientModel";
export interface AddressModel {
    id?: number;
    street: string;
    number: string;
    complement?: string;
    city: string;
    state: string;
    cep: string;
    client?: ClientModel;
}