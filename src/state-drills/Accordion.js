import React, { Component } from 'react';
import './Accordion.css';

export class Accordion extends Component {
    static defaulProps = {
        sections: []
    };

    state = {
        lastClicked: null,
    }

    handleClick = (index) => {
        this.setState( {
            lastClicked: index
        })
    }

    displayList = (item, index) => {
        return (
            <li key={index} >
                <button onClick={() => this.handleClick(index)}> {item.title}</button>
                {(this.state.lastClicked === index) && <p>{item.content}</p>}
            </li>
        )
    }
        
    render() {
        return (
            <ul>
                {this.props.sections.map((item, index) => 
                    this.displayList(item, index)
                )}
            </ul>
            )
          }
}
        

export default Accordion;
