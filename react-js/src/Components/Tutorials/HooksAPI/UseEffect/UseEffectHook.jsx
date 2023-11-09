import React, { useEffect, useState } from "react";
import "./UseEffectHook.css";
import { getCategories, getQuote } from "../../../Service/QuotesSer";
import Quote from "./Components/Quote";
import Categories from "./Components/getCategories";



const UseEffectHook = () => {

    const [category, setCategory] = useState([]);

    const [selected, setSelected] = useState("");

    const [quote, setQuote] = useState({});


    // Fetch categories on initial render
    useEffect(() => {
        getCategories().then(catgrs => {
            if (catgrs.length > 0) {
                setCategory(catgrs);
                setSelected(catgrs[0]);
            }
        })
    }, []);


    // When the "selected" is set fetch a quote
    useEffect(() => {
        selected && getQuote(selected).then(q => setQuote(q));
    }, [selected]);


    // When the category is changed, the timer is reset
    // When the app is unmounted, the timer instance is cleaned up
    useEffect(() => {
        let timer = setInterval(() => {
            getQuote(selected).then(q => setQuote(q));
        }, 5000);

        return () => clearInterval(timer);
    }, [selected]);

    return (
        <>
            <div className="quote_master">
                <Categories
                    category={category}
                    selected={selected}
                    onSelected={category => setSelected(category)}
                />

                {
                    <Quote
                        quote={quote.quote}
                        author={quote.author}
                    />
                }
            </div>
        </>
    )
};



export default UseEffectHook;
