import React, { useState } from 'react';
import "../style/Banner.css";

export const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const banners = [
        {
            title: 'Explore a\nLiberdade\nOff-Road',
            description: 'Embarque em uma jornada inesquecível fora dos limites da \n estrada. Com nossos veículos  todo-o-terreno robustos e\n confiáveis, você estará pronto para enfrentar qualquer desafio\n que a natureza ofereça. Descubra paisagens selvagens, supere\n obstáculos e viva aventuras que ficarão gravadas em sua\n memória para sempre. Alugue agora e transforme sua próxima\n viagem em uma experiência épica de off-road!',
            image: './CarroOffroad.png',
            buttonImage: './icons banner/montanha.svg'
        },
        {
            title: 'Desvende a\nLiberdade\nVintage',
            description: `Embarque em uma jornada nostálgica pelas estradas da história\n automotiva. Com nossos carros antigos, cheios de charme e\n confiabilidade, você estará preparado para reviver uma era de\n aventuras sobre rodas. Explore paisagens pitorescas, supere as\n limitações do asfalto e mergulhe em experiências que ecoarão\n através do tempo. Reserve agora e transforme sua próxima \n viagem em uma jornada épica pelo passado automotivo.`
,
            image: './CarroVintage.png',
            buttonImage: './icons banner/estrada.svg'
        },
        {
            title: 'Acelere Sua\nAventura\nNas Estradas',
            description: 'Uma chamada vibrante para os aventureiros de coração e os\n amantes da estrada, convidando-os a embarcar em uma jornada\n cheia de velocidade, descobertas e paisagens espetaculares.\n Este convite ousado promete uma experiência de viagem\n emocionante, onde cada curva, cada quilômetro percorrido, é\n uma oportunidade para explorar novos horizontes, desafiar\n limites e criar memórias inesquecíveis. Prepare-se para acelerar\n sua adrenalina e sua imaginação enquanto se entrega a uma\n aventura que promete emoção, liberdade e alegria na estrada.',
            image: './CarroVeloz.png',
            buttonImage: './icons banner/floresta.svg'
        }
    ];

    const handleSelectBanner = (index: number) => {
        setCurrentIndex(index);
    };

    const renderButtons = () => {
        return banners.map((banner, index) => (
            <button
                key={index}
                onClick={() => handleSelectBanner(index)}
                className={currentIndex === index ? 'active' : ''}
            >
                <img src={banner.buttonImage} alt={`Banner ${index}`} />
            </button>
        ));
    };

    return (
        <div className="banner-container">
            <div className="banner-content">
                <span className="title">{banners[currentIndex]?.title.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}</span>
                <br />
                <span className="description">{banners[currentIndex]?.description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}</span>
                <div className="banner-buttons">
                    {renderButtons()}
                </div>
            </div>
            <img src={banners[currentIndex]?.image} alt={`Imagem do banner ${currentIndex}`} className="banner-image" />
        </div>
    );
};    