import React from 'react';

class Checkout extends React.Component {
  state = {
    keyStorage: [],
  };

  componentDidMount() {
    // const { keyStorage } = this.state;
    const value = JSON.parse(localStorage.getItem('productsLocalStorage'));
    this.setState({ keyStorage: value });
  }

  render() {
    const { keyStorage } = this.state;
    console.log(keyStorage);
    return (
      <p> teste </p>

    );
  }
}
export default Checkout;
