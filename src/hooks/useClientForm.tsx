import { useState } from 'react';
import { ClientModel } from '../interfaces/ClientModel';
import { ClientType } from '../interfaces/ClientType';

const initialClient: ClientModel = {
    name: '',
    lastName: '',
    phone: '',
    cpf: '',
    cnh: '',
    yearOfBirth: 0,
    email: '',
    password: '',
    clientType: ClientType.INDIVIDUAL,
    addresses: [{ // Inicialize addresses como um array contendo um objeto AddressModel vazio
        street: '',
        number: '',
        complement: '',
        city: '',
        state: '',
        cep: ''
    }]
};

export const useClientForm = () => {
    const [client, setClient] = useState<ClientModel>(initialClient);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;

        setClient(prevClient => ({
            ...prevClient,
            [name]: value
        }));
    };

    return { client, handleChange };
};
