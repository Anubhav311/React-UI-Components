import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return <a href="https://reactjs.org/" target="block"><div className="cardContainer">
        <CardBanner/>
        <CardContent/>
    </div></a>
}

export default CardContainer;