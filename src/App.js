import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from "./components/Title/Title";
import SearchBox from "./components/SearchBox/SearchBox";
import StockInfoBox from "./components/StockInfoBox/StockInfoBox";
import Loader from "./components/Loader/Loader";

class App extends Component {
  state = {
    stocks: [],
    isLoading: false
  }

  deleteStock = (indexOfStock) => {
    const newStocks = [...this.state.stocks];
    newStocks.splice(indexOfStock, 1);

    this.setState({stocks: newStocks});
  }

  addStock = (stockSymbol, stockPrice) => {
    const newStocks = [... this.state.stocks];
    newStocks.push({
      symbol: stockSymbol,
      price: stockPrice
    })
  
    this.setState({stocks: newStocks});
  }
  
  handleSearch = (symbol) => {
    this.setState({isLoading: true});

    // call API
    fetch(`https://api.iextrading.com/1.0/tops/last?symbols=${symbol}`)
    .then((response) => response.json())
    .then(json => {
      this.setState({isLoading: false});

      const symbol = json[0].symbol;
      const price = json[0].price;

      this.addStock(symbol, price);
    })
    .catch(err => {
      console.error(err);
      this.setState({isLoading: false});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
          <SearchBox handleSearch={this.handleSearch} />
          <StockInfoBox deleteStock={this.deleteStock} stocks={this.state.stocks} />
          <Loader isLoading={this.state.isLoading} />
        </header>
      </div>
    );
  }
}

export default App;
