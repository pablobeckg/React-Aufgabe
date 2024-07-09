import React from 'react';
import './AnimalItem.css';

interface IAnimal {
    name: string;
    species: string;
    habitat: string;
    lifespan: number;
    diet: string;
    funFacts: string[];
    emoji: string;
}

const AnimalItem: React.FC<IAnimal> = (props) => {
    return (
        <div className="content-wrapper">
            <h1>{props.emoji}</h1>
            <h2>{props.species}</h2>
            <h3>{props.name}</h3>
            <h3>{props.habitat}</h3>
            <h3>{props.diet}</h3>
            <p>{props.lifespan} years</p>
            <ul className="fun-facts">
                {props.funFacts.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
        </div>
    );
}

export default AnimalItem;
