import React from 'react';
import { Component } from 'react';


class Pin extends Component {
    mouseOver = () => {
        const { letter, number, setMousePos } = this.props;

        setMousePos(letter, number);
    }

    click = () => {
        const { letter, number, placeShip } = this.props;

        placeShip(letter, number);
    }

    render() {
        let pinStyle = {
            height: "50px",
            width: "50px",
            backgroundColor: this.props.color,
            borderRadius: "50%",
            display: "inline",
        };

        return (
            <div onMouseOver={this.mouseOver} onClick={this.click} className="dot p-0 m-0 border" style={pinStyle}></div>
        );
    }

}

export default Pin;