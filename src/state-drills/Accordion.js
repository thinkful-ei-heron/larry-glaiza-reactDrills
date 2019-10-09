import React, { Component } from 'react'

export class Accordion extends Component {
    static defaulProps = {
        sections: []
    }

    state = {
        lastClicked: null
    }

    handleClick = (index) => {
        this.setState( {
            lastClicked: index
        })
    }


    displayListItem = (item, index) => {
        return (
            <li className='accordion-item' key={index}>
                <button type='button' onClick={()=> this.handleClick(index)}>{item.title}</button>
                {(this.state.lastClicked === index) && <p>{item.content}</p>}
            </li>
        )
    }


    render() {
        return (
            <ul className = 'accordion-container'>
               {this.props.sections.map((item, index) => 
                    this.displayListItem(item, index)
                )}
            </ul>
        )
    }
}

export default Accordion
