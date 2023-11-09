import React from "react";



const Details = ({ data }) => {

    const { sym, name, current, open, marketCap, high, low, prevClose } = data;

    return (
        <>
            <div className="details">
                <div className="sym-det">{sym}</div>
                <div className="name-det">{name}</div>
                <div className="col">
                    <div className="stats-det">Current: ${current}</div>
                    <div className="stats-det">Open: ${open}</div>
                    <div className="stats-det">Prev Close: ${prevClose}</div>
                </div>
                <div className="col">
                    <div className="stats-det">High: ${high}</div>
                    <div className="stats-det">Low: ${low}</div>
                    <div className="stats-det">Mkt Cap: ${marketCap}</div>
                </div>
            </div>
        </>
    )
};



export default Details;