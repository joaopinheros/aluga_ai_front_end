import React, { useState } from 'react';
import { useClientForm } from '../hooks/useClientForm';
import '../style/RegisterClient.css';
import Header from '../components/Header';
import RegisterAddress from './RegisterAddress';

export const RegisterClient: React.FC = () => {
    const { client, handleChange } = useClientForm();
    const [currentStep, setCurrentStep] = useState<number>(1);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (currentStep === 1) {
            setCurrentStep(2);
        } else {
            // Lógica para enviar os dados do cliente e endereço para o servidor
            console.log('Client and address submitted:', client);
        }
    };

    const nextStep = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    return (
        <div>
            <Header />
            <div className="container-client">
                <div className="text-container-client">
                    <h1 className='text-h1-client'>Cadastre-se na Aluga Aí</h1>
                    <p className='text-p-client'>
                        Junte-se a nós e comece a criar memórias inesquecíveis a cada quilômetro percorrido.
                        <br />
                        Cadastre-se hoje e faça parte da família Aluga Aí!
                    </p>
                </div>
                <div className="form-container-client">
                    <form className="register-client-form-client" onSubmit={handleSubmit}>
                        <div className='div-form'>
                            {currentStep === 1 && (
                                <>
                                    <div className="form-client">
                                        <div className="form-group">
                                            <label htmlFor="name">Nome</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={client.name}
                                                onChange={handleChange}
                                                className="form-input-client name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName">Sobrenome</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={client.lastName}
                                                onChange={handleChange}
                                                className="form-input-client lastName"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Telefone</label>
                                            <input
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                value={client.phone}
                                                onChange={handleChange}
                                                className="form-input-client phone"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cpf">CPF</label>
                                            <input
                                                type="text"
                                                id="cpf"
                                                name="cpf"
                                                value={client.cpf}
                                                onChange={handleChange}
                                                className="form-input-client cpf"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cnh">CNH</label>
                                            <input
                                                type="text"
                                                id="cnh"
                                                name="cnh"
                                                value={client.cnh}
                                                onChange={handleChange}
                                                className="form-input-client cnh"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="yearOfBirth">Ano de Nascimento</label>
                                            <input
                                                type="number"
                                                id="yearOfBirth"
                                                name="yearOfBirth"
                                                value={client.yearOfBirth}
                                                onChange={handleChange}
                                                className="form-input-client yearOfBirth"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={client.email}
                                                onChange={handleChange}
                                                className="form-input-client email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Senha</label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={client.password}
                                                onChange={handleChange}
                                                className="form-input-client password"
                                            />
                                        </div>
                                    </div>
                                    <button type="button" onClick={nextStep} className="next-button">Avançar</button>
                                </>
                            )}
                            {currentStep === 2 && (
                                <>
                                    <RegisterAddress />
                                    <div>
                                        <button type="submit" className="submit-button">Enviar</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
