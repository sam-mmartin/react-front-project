import React from 'react';

const ButtonFollow = () => {
    return (
        <div className="follow">
            <button className="btn btn-fab btn-primary btn-round" rel="tooltip" title="Follow this user">
                <i className="material-icons">add</i>
            </button>
        </div>
    );
};

export default ButtonFollow;
