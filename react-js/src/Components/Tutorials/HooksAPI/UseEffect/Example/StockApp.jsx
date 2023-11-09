import React, { useEffect, useState } from "react";
import Rate from "./Rate";
import Details from "./Details";
import { getDetails, getRates } from "../../../../Service/StockData";
import "./StockApp.css";



const StockApp = () => {

    const [stocks, setStocks] = useState([]);
    const [selected, setSelected] = useState("");
    const [details, setDetails] = useState({});
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        getRates().then(data => setStocks(data));
    }, []);


    useEffect(() => {
        getDetails(selected).then(data => {
            setDetails(data[0]);
        });
    }, [selected]);

    return (
        <>
            <div className="stock_app">
                <h1 onClick={() => setShowDetails(false)}>Stock Master</h1>
                <div className="stock_list">
                    {!showDetails &&
                        stocks &&
                        stocks.map(({ id, sym, name, current }) => (
                            <Rate
                                sym={sym}
                                name={name}
                                current={current}
                                key={id}
                                onSelect={() => {
                                    setSelected(sym);
                                    setShowDetails(true);
                                }}
                            />
                        ))}

                    {showDetails && details && <Details data={details} />}
                </div>
            </div>
        </>
    )
};



export default StockApp;