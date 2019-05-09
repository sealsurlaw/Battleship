import React from 'react';
import { Component } from 'react';
import './App.css';
import Board from './Board.jsx';
import Toggle from './Toggle.jsx';
import ShipPort from './ShipPort.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotation: 'HORIZONTAL',
      length: 3,
      selectedShip: 0,
    }
  }

  toggleRotation = () => {
    let { rotation } = this.state;

    if (rotation === 'HORIZONTAL')
      this.setState({ rotation: 'VERTICAL' })
    if (rotation === 'VERTICAL')
      this.setState({ rotation: 'HORIZONTAL' })
  }

  render() {
    let { rotation, length, selectedShip } = this.state;

    return (
      <div className="App">
        <Toggle float="left" toggleFunc={this.toggleRotation} />
        <Board rotation={rotation} length={length} />
        <ShipPort selectedShip={selectedShip} />
      </div>
    );
  }
}

export default App;
