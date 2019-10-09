/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export class RouletteGun extends Component {
    
    static defaultProps = {
        bulletInChamber: 8,
    };
    
    state = {
        chamber: null,
        spinningTheChamber: false
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber: true
        });

        this.timeOut = setTimeout( () => {
            const timeOutNewValue = Math.ceil(Math.random() * 8)
                this.setState({
                    chamber: timeOutNewValue
                    , spinningTheChamber: false
                })
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut)
    }

    displayParagraph() {
        if (this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!'
        } else if(this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!'
        } else {
            return  `You're safe`
        }
    }

    render() {
        return (
            <div>
                <p>{this.displayParagraph()}</p>
                <button onClick={() => this.handleClick()}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun
