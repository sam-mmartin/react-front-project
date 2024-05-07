import React from 'react';
import Languages from '../../../models/languages';

const CardLanguage = (props: Languages) => {
    const imageSrc = `url(/static/img/developer/${props.image})`;

    return (
        <div className="card card-background" style={{ backgroundImage: imageSrc }}>
            <a href="#pablo"></a>
            <div className="card-body">
                <label className="badge badge-warning">{props.startDateUse.toString()}</label>
                <a href="#pablo">
                    <h2 className="card-title">{props.name}</h2>
                </a>
            </div>
        </div>
    );
};

export default CardLanguage;
