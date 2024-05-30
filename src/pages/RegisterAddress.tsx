import React from 'react';
import { useAddressForm } from '../hooks/useAddressForm';
const RegisterAddress: React.FC = () => {
    const { addresses, handleAddressChange } = useAddressForm();

    return (
        <div>
            {addresses.map((address, index) => (
                <div key={index} className="form-group">
                    <div className='form-group'>
                    <label htmlFor={`street-${index}`}>Rua</label>
                    <input
                        type="text"
                        id={`street-${index}`}
                        name={`street-${index}`}
                        value={address.street}
                        onChange={(e) => handleAddressChange(index, e)}
                        className="form-input-client street"
                    />
                    </div>

                    <div className='form-group'>
                    <label htmlFor={`number-${index}`}>Número</label>
                    <input
                        type="text"
                        id={`number-${index}`}
                        name={`number-${index}`}
                        value={address.number}
                        onChange={(e) => handleAddressChange(index, e)}
                        className="form-input-client number"
                    />
                    </div>

                    <div className='form-group'>
                    <label htmlFor={`complement-${index}`}>Complemento</label>
                    <input
                        type="text"
                        id={`complement-${index}`}
                        name={`complement-${index}`}
                        value={address.complement}
                        onChange={(e) => handleAddressChange(index, e)}
                        className="form-input-client complement"
                    />
                    </div>

                    <div className='form-group'>
                    <label htmlFor={`city-${index}`}>Cidade</label>
                    <input
                        type="text"
                        id={`city-${index}`}
                        name={`city-${index}`}
                        value={address.city}
                        onChange={(e) => handleAddressChange(index, e)}
                        className="form-input-client city"
                    />
                    </div>

                    <div className='form-group'>
                    <label htmlFor={`state-${index}`}>Estado</label>
                    <input
                        type="text"
                        id={`state-${index}`}
                        name={`state-${index}`}
                        value={address.state}
                        onChange={(e) => handleAddressChange(index, e)}
                        className="form-input-client state"
                    />
                    </div>

                    <div className='form-group'>
                    <label htmlFor={`cep-${index}`}>CEP</label>
                    <input
                        type="text"
                        id={`cep-${index}`}
                        name={`cep-${index}`}
                        value={address.cep}
                        onChange={(e) => handleAddressChange(index, e)}
                        className="form-input-client cep"
                    />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RegisterAddress;
