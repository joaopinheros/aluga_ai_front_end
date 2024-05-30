import React from "react";
import { useCarForm } from "../hooks/useCarForm";
import "../style/RegisterCar.css";
import Header from "../components/Header";

export const RegisterCar: React.FC = () => {
  const { car, handleChange, handleSubmit } = useCarForm();

  return (
    <div>
      <div> <Header/> </div>
    <div className="container">
      <div className="text-container">
        <div className="text-h1">
          <h1>Pronto para compartilhar <br /> sua jornada?</h1>
        </div>
        <div className="text-span">
        <span>
            Cadastre seu carro na Aluga Aí e transforme-o em uma fonte de renda.<br />
            Com nosso processo simples e seguro, você pode oferecer sua própria<br />
            experiência de condução e ajudar outros a explorar o mundo de maneira única.<br />
            Junte-se à nossa comunidade de proprietários e comece a ganhar dinheiro<br />
            com seu veículo hoje mesmo!
        </span>
        </div>
      </div>
      <div className="form-container">
        <form className="register-car-form" onSubmit={handleSubmit}>
          <div className="div-form-model">
            <label htmlFor="model" className="form-label">Modelo</label>
            <input
              type="text"
              id="model"
              name="model"
              value={car.model}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="div-form-year">
            <label htmlFor="year" className="form-label">Ano</label>
            <input
              type="number"
              id="year"
              name="year"
              value={car.year}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="div-form-color">
            <label htmlFor="color" className="form-label">Cor</label>
            <input
              type="text"
              id="color"
              name="color"
              value={car.color}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="div-form-plate">
            <label htmlFor="plate" className="form-label">Placa</label>
            <input
              type="text"
              id="plate"
              name="plate"
              value={car.plate}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="div-form-mileage">
            <label htmlFor="mileage" className="form-label">Quilometragem</label>
            <input
              type="number"
              id="mileage"
              name="mileage"
              value={car.mileage}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="div-form-secury">
            <label htmlFor="security" className="form-label">Veiculo com Seguro?</label>
            <input
              type="checkbox"
              id="security"
              name="security"
              checked={car.security}
              onChange={handleChange}
              className="form-checkbox"
            />
          </div>
          <div className="div-form-renavan">
            <label htmlFor="renavan" className="form-label">Renavan</label>
            <input
              type="text"
              id="renavan"
              name="renavan"
              value={car.renavan}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="div-form-chassis">
            <label htmlFor="chassis" className="form-label">Chassi</label>
            <input
              type="text"
              id="chassis"
              name="chassis"
              value={car.chassis}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="div-form-yearOfManufacture">
            <label htmlFor="yearOfManufacture" className="form-label">Ano de Fabricação</label>
            <input
              type="number"
              id="yearOfManufacture"
              name="yearOfManufacture"
              value={car.yearOfManufacture}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="div-form-typeFuel">
            <label htmlFor="typeFuel" className="form-label">Tipo de Combustível</label>
            <input
              type="text"
              id="typeFuel"
              name="typeFuel"
              value={car.typeFuel}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="div-form-numberOfPorts">
            <label htmlFor="numberOfPorts" className="form-label">Número de Portas</label>
            <input
              type="number"
              id="numberOfPorts"
              name="numberOfPorts"
              value={car.numberOfPorts}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="div-form-available">
            <label htmlFor="available" className="form-label">Clique aqui para aceitar os Termos e Condições</label>
            <input
              type="checkbox"
              id="available"
              name="available"
              checked={car.available}
              onChange={handleChange}
              className="form-checkbox"
            />
          </div>
          <div className="div-form-additionalDetails">
            <label htmlFor="additionalDetails" className="form-label">Detalhes adicionais</label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              value={car.additionalDetails}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </div>
    </div>
  );
};
