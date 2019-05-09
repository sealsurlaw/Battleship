import React from 'react';
import { Component } from 'react';
import './App.css';

class Toggle extends Component {

    render() {
        let { float } = this.props;
        float = `text-${float}`;

        return (
            <div onClick={this.props.toggleFunc} className={float}>This is a toggle</div>
        );
    }
}

export default Toggle;
