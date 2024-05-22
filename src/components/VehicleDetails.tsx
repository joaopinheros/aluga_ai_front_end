import React from "react";
import { Car } from "../interfaces/Car";
import "../style/VehicleDetails.css";

const handleVehicleDetails = () => {
    // Implementação da Lógica aqui
};

export const VehicleDetails: React.FC = () => {
    const [CarModel, setCarModel] = React.useState<Car | null>(null);

    React.useEffect(() => {
        // Simulação de um veículo para teste
        const mockVehicle: Car = {
            modelo: "Carro de Teste",
            precoDiaria: 100,
            dataInicio: new Date().toISOString(),
            dataFim: new Date().toISOString(),
            localizacao: "Local de Teste",
            fotoVeiculo: "url_da_foto",
            cor: "Cor de Teste",
            anoFabricacao: 2022,
            combustivel: "Gasolina",
            portas: 4,
            quilometragem: 5000
        };
        
        setCarModel(mockVehicle);
        handleVehicleDetails(); // Buscar dados do veículo ao renderizar o componente
    }, []);

    if (!CarModel) {
        return <div>Carregando...</div>; // Exibir mensagem de carregamento
    }

    return (
        <div className="Vehicle-Details">
            {/* Exibindo foto do veículo (se disponível) */}
            {CarModel.fotoVeiculo && <img src={CarModel.fotoVeiculo} alt="Foto do veículo" />}

            <BoxVehicleDetails {...CarModel} /> {/* Correção no uso do componente BoxVehicleDetails */}
        </div>
    );
};

export const BoxVehicleDetails: React.FC<CarModel> = ({ modelo, precoDiaria, dataInicio, dataFim, localizacao }) => { // Correção no nome do componente
    return (
        <div className="boxVehicle">
            <div className="model">{modelo}</div>
            <div className="price">R${precoDiaria.toFixed(2)} por dia</div>
            <div className="localization-vehicle">{localizacao}</div>
            <div className="dates">
                <div className="dataInicio">
                    <span>Quando vai:</span>
                    <input type="date" placeholder="" value={dataInicio}/>
                </div>
                <div className="dataFim">
                    <span>Quando volta:</span>
                    <input type="date" placeholder="" value={dataFim}/>
                </div>
            </div>
            <div className="acoes">
                <button className="reservar">Reservar</button>
                <button className="adicionarLista">Adicionar à Lista de Reservas</button>
            </div>
            <VehicleCharacteristics modelo={""} precoDiaria={0} dataInicio={""} dataFim={""} localizacao={""} cor={""} anoFabricacao={0} combustivel={""} portas={0} quilometragem={0} />
        </div>
    );
};

export const VehicleCharacteristics: React.FC<CarModel> = ({ modelo, cor, anoFabricacao, combustivel, portas, quilometragem, localizacao }) => { // Correção na definição das props
    return (
        <div className="description-details-vehicle">

            <div className="details-car">
                <img src={"./Icons-VehicleDetails/carroIcon.png"} alt="Ícone de carro" />
                <span>Modelo:</span> {modelo}
            </div>

            <div className="details-color">
                <img src={"./Icons-VehicleDetails/CorIcon.png"} alt="Tipo de combustível do carro" />
                <span>Cor:</span> {cor}
            </div>

            <div className="details-fabrication">
                <img src={"./Icons-VehicleDetails/chaveIcon.png"} alt="Ano de fabricação do carro" />
                <span>Fabricado:</span> {anoFabricacao}
            </div>

            <div className="details-fuel">
                <img src={"./Icons-VehicleDetails/combustivelIcon.png"} alt="Tipo de combustível do carro" />
                <span>Combustível:</span> {combustivel}
            </div>

            <div className="details-door">
                <img src={"./Icons-VehicleDetails/portas.png"} alt="Numero de portas do carro" />
                <span>Portas:</span> {portas}
            </div>

            <div className="details-mileage">
                <img src={"./Icons-VehicleDetails/kmIcon.png"} alt="Quilometragem rodada do carro" />
                <span>Quilometragem:</span> {quilometragem}
            </div>

            <div className="details-localization">
                <img src={"./Icons-VehicleDetails/localizacaoIcon.png"} alt="Localizacão atual do carro" />
                <span>Retirada:</span> {localizacao}
            </div>

        </div>
    );
};
