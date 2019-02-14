import React from "react";
import Button from "../../../Button/Button";

function Stock({symbol, price, handleClick, indexOfStock}) {
    return (
        <div>
            {symbol} ${price} <Button handleClick={() => handleClick(indexOfStock)}>Delete</Button>
        </div>
    );
}

export default Stock;