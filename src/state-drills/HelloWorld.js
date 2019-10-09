import React, { Component } from 'react'

export class HelloWorld extends Component {
    state = {
        who: 'world'
    };

    handleClick = arg => {
     this.setState({
         who: arg
     })
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button type="button" onClick={ () => this.handleClick('world!')}>World</button>
                <button type="button" onClick={ () => this.handleClick('friend!')}>Friend</button>
                <button type="button" onClick={ () => this.handleClick('react!')}>React</button>
           </div>
        )
    }
}

export default HelloWorld


