import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Products from './pages/Products';
import ShopCart from './pages/ShopCart';
import Checkout from './pages/Checkout';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/carrinho-de-compras" component={ ShopCart } />
        <Route exact path="/product/:id" component={ Products } />
        <Route exact path="/checkout" component={ Checkout } />
      </Switch>
    );
  }
}
export default App;
