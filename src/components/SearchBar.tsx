import { useState } from 'react';
import "../style/SearchBar.css";

const handleSearch = () => {
  // Implemente sua lógica de pesquisa aqui
};

export const SearchBar = () => {
  const [modelo, setModelo] = useState('');
  const [dataIda, setDataIda] = useState('');
  const [dataVolta, setDataVolta] = useState('');

  return (
    <div className="search-bar">
      <div className="search-inputs">
        <div className="input-container">
          <input
            type="text"
            placeholder=""
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
          <div className="placeholders">
            <span className="placeholder-main">Modelo</span>
            <span className="placeholder-sub">Selecionar Carros</span>
          </div>
        </div>

        <div className="input-container">
          <input
            type="date"
            placeholder=""
            value={dataIda}
            onChange={(e) => setDataIda(e.target.value)}
          />
          <div className="placeholders">
            <span className="placeholder-main">Quando</span>
            <span className="placeholder-sub">Selecionar Ida</span>
          </div>
        </div>

        <div className="input-container">
          <input
            type="date"
            placeholder=""
            value={dataVolta}
            onChange={(e) => setDataVolta(e.target.value)}
          />
          <div className="placeholders">
            <span className="placeholder-main">Quando Volto</span>
            <span className="placeholder-sub">Selecionar Volta</span>
          </div>
        </div>
      </div>
      <button onClick={handleSearch}>
        <img src={'/Button.svg'} alt="Logo da Aluga aí" className='icon-search' />
      </button>
    </div>
  );
};
