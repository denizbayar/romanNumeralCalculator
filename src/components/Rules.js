import React, { Component } from 'react'

class Rules extends Component {
    render() {
        return (
            <div className="rules">
                <h3>Rules:</h3>
                <ul>
                    <li>Only I, X, C, and M can be repeated; V, L, and D cannot be</li>
                    <li>Repeating a numeral up to three times</li>
                    <li>Decrease from left to right represents addition of the numbers</li>
                    <li>Smaller numeral to the left of a larger numeral represents subtraction</li>
                    <li>Max value is 3999</li>
                </ul>
            </div>
        )
    }
}
export default Rules;