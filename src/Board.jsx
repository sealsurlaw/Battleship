import React from 'react';
import { Component } from 'react';
import Pin from './Pin.jsx';

let pinMap = [];

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseOnLetter: 0,
            mouseOnNumber: 0,
        }

        // Fill out pinMap
        for (let i = 0; i < 10; ++i) {
            pinMap.push([]);
            for (let j = 0; j < 10; ++j) {
                pinMap[i].push('lightGrey');
            }
        }

        pinMap[5][5] = 'red';

    }

    setMousePos = (letter, number) => {
        this.setState({
            mouseOnLetter: letter,
            mouseOnNumber: number,
        })
        this.updateColorsHover(letter, number);
    }

    updateColorsHover(letter, number) {
        this.setPin(letter, number, 'blue');

    }

    placeShip = (letter, number) => {
        if (this.checkOverlap(letter, number) === false)
            this.setPin(letter, number, 'orange');

    }

    setPin(letter, number, color) {
        let pinNum = this.getPinNumbers(letter, number);

        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                if (pinMap[i][j] === 'blue')
                    pinMap[i][j] = 'lightGrey';

            }
        }

        pinNum.forEach(pin => {
            let i = pin[0];
            let j = pin[1];

            if (pinMap[i][j] !== 'orange' &&
                pinMap[i][j] !== 'red')
                pinMap[i][j] = color;
        });
    }

    getPinNumbers(letter, number) {
        let { rotation, length } = this.props;
        let pinNumbers = [];

        if (rotation === 'VERTICAL') {
            pinMap.forEach((pinCol, i) => {
                pinCol.forEach((pin, j) => {
                    if (i === letter &&
                        j >= number &&
                        j < number + length)
                        pinNumbers.push([i, j]);
                });
            });
        }
        else {
            pinMap.forEach((pinCol, i) => {
                pinCol.forEach((pin, j) => {
                    if (i >= letter &&
                        i < letter + length &&
                        j === number)
                        pinNumbers.push([i, j]);
                });
            });
        }

        return pinNumbers;
    }

    checkOverlap(letter, number) {
        let pinNum = this.getPinNumbers(letter, number);

        // Check if it overlaps
        let overlaps = false;
        pinNum.forEach(pin => {
            let i = pin[0];
            let j = pin[1];

            if (pinMap[i][j] === 'orange' ||
                pinMap[i][j] === 'red')
                overlaps = true;
        });

        //Check if it's off the board
        if (pinNum.length !== this.props.length)
            overlaps = true;

        return overlaps;
    }

    render() {
        const pins = pinMap.map((pinCol, i) => {
            return pinCol.map((pin, j) => {
                return <Pin key={parseInt('' + i + j)} letter={i} number={j} setMousePos={this.setMousePos} placeShip={this.placeShip} color={pin} />;
            })
        });

        return (
            <div className="p-1 border" style={{
                display: "grid",
                gridColumnGap: "0px",
                gridTemplateColumns: 'repeat(10,50px)',
                gridTemplateRows: 'repeat(10,50px)',
                padding: "10px",
            }}>
                {pins}
            </div >
        );
    }

}

export default Board;