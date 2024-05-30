import { AddressModel } from "./AddressModel";
import { ClientType } from "./ClientType";

export interface ClientModel {
    id?: number;
    name: string;
    lastName: string;
    phone: string;
    cpf: string;
    cnh: string;
    yearOfBirth: number;
    email: string;
    password: string;
    clientType: ClientType;
    addresses: AddressModel[];
}
