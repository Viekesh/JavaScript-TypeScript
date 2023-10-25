import React, { useEffect, useState } from "react";
import "./ErrorManagement.css";
import ErrorManager from "./ErrorManager";
import Product from "./Components/Product";
import getProducts from "./Services/getProduct";



const ErrorManagement = () => {

    const [category, setCategory] = useState("");

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    });

    const filterByCategory = (cat) => {
        category === cat ? setCategory("") : setCategory(cat);
    };

    return (
        <div className="container">
            <ErrorManager onClose={() => setCategory("")}>
                <div className="categories">
                    {[...new Set(products.map((p) => p.type))].map((cat) => (
                        <div
                            className={category === cat ? "cat-btn cat-btn-on" : "cat-btn"}
                            key={cat}
                            onClick={() => filterByCategory(cat)}
                        >
                            {cat}
                        </div>
                    ))}
                </div>

                {category ? (
                    products
                        .filter((p) => p.type === category)
                        .map((p) => <Product item={p} key={p.id} />)
                ) : (
                    <p className="pick-text">Pick a category</p>
                )}
            </ErrorManager>
        </div>
    )
}



export default ErrorManagement;