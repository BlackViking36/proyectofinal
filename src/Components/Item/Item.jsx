import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ prod }) => {
    return (
        <div>
            <h1>{prod.name}</h1>
            <h2>{prod.price}</h2>
            <Link to={`/detail/${prod.id}`}> DETALLES </Link>
        </div>
    );
};
