import { useState } from 'react';
import { AddressModel } from '../interfaces/AddressModel';

const initialAddress: AddressModel = {
    street: '',
    number: '',
    complement: '',
    city: '',
    state: '',
    cep: ''
};

export const useAddressForm = () => {
    const [addresses, setAddresses] = useState<AddressModel[]>([initialAddress]);

    const handleAddressChange = (
        index: number,
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setAddresses(prevAddresses => prevAddresses.map((address, addrIndex) =>
            addrIndex === index ? { ...address, [name]: value } : address
        ));
    };

    return { addresses, handleAddressChange };
};
