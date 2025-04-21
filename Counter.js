import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count : 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState(previousState => ({
            count : previousState.count + 1,
        }));
    }

    decrement() {
        this.setState(decrementState => ({
            count : decrementState.count - 1,
        }))
    }

    render() {
        return (
            <div>
            <h1>Counter App</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

}   

export default Counter;