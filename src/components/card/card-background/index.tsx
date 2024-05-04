import React from 'react';
import CardBackgroundProps from '../models/card-background-props';

const CardBackground = (props: CardBackgroundProps) => {
    const imageSrc = `url(${props.imageSrc})`;

    return (
        <div className="card card-background" style={{ backgroundImage: imageSrc }}>
            <a href="#pablo"></a>
            <div className="card-body">
                <label className="badge badge-warning">{props.label}</label>
                <a href="#pablo">
                    <h2 className="card-title">{props.title}</h2>
                </a>
            </div>
        </div>
    );
};

export default CardBackground;
