import React from 'react';
import { Component } from 'react';

class Ship extends Component {

    render() {

        return (
            <div>
                This is a ship of length {this.props.length}
            </div>
        );
    }
}

export default Ship;
