import React from "react";

const Rate = ({ sym, name, current, onSelect }) => (
    <div className="rate" onClick={onSelect}>
        <div className="symbol">{sym}</div>
        <div className="name">{name}</div>
        <div className="current-rate">${current}</div>
    </div>
);

export default Rate;
