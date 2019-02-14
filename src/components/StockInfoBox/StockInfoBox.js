import React, { Component } from 'react';
import Stock from "./components/Info/Stock";

class StockInfoBox extends Component {
    renderStocks = () => {
        const stocks = this.props.stocks;

        return stocks.map((info, index) => (
            <Stock
                key={index}
                symbol={info.symbol}
                price={info.price}
                handleClick={this.props.deleteStock}
                indexOfStock={index}
            />
        ));
    }

    render() {
        return (
            <div>
                {this.renderStocks()}
            </div>
        );
    }
}

export default StockInfoBox;