import React from 'react';

const InfoGroup = (props) => {
    return (
        <div className="infogroup">
            <label>{props.label}</label>
            <p>{props.info}</p>
        </div>
    );
};

export default InfoGroup;