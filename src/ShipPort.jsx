import React from 'react';
import { Component } from 'react';
import Ship from './Ship.jsx';

class ShipPort extends Component {

    render() {

        return (
            <div className="App">
                <Ship length={5} />
                <Ship length={4} />
                <Ship length={4} />
                <Ship length={3} />
                <Ship length={3} />
                <Ship length={3} />
                <Ship length={2} />
                <Ship length={2} />
                <Ship length={2} />
                <Ship length={2} />
            </div>
        );
    }
}

export default ShipPort;
