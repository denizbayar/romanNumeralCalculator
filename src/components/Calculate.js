import React, { Component } from 'react';
import Validation from '../common/validation';
import Calculation from '../common/calculation';

import Rules from './Rules';

class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: '',
            secondNumber: '',
            operator: 'add',
            firstNumberIsValid: true,
            secondNumberIsValid: true,
            result: null,
            error: null,
            errorDisplayed: false
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
    }
    onInputChange(e) {
        let name = e.target.name;
        this.setState({ [e.target.name]: e.target.value }, function () {
            this.immediateValidation(name);
        });
    }
    onSelectChange(e) {
        this.setState({ error: null });
        this.setState({ operator: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({ error: null, result: null });
        const { firstNumber, secondNumber, operator } = this.state;
        Calculation(firstNumber, secondNumber, operator).then(res => this.setState({ result: res })).catch(err => this.setState({ error: err }))
    }
    immediateValidation(name) {
        Validation(this.state[name].toUpperCase()).then(res => this.setState({ [name + "IsValid"]: true })).catch(err => this.setState({ [name + "IsValid"]: false, error: err }))
    }
    render() {
        return (
            <div className="main">
                <div className="card">
                    <h1>Roman Numeral Calculator</h1>
                    <form onSubmit={this.onSubmit} >
                        <label>
                            First Roman Numeral:</label>
                        <input type="text" value={this.state.firstNumber} onChange={this.onInputChange} name="firstNumber" placeholder="enter roman numeral"></input>
                        <label>
                            Second Roman Numeral:</label>
                        <input type="text" value={this.state.secondNumber} onChange={this.onInputChange} name="secondNumber" placeholder="enter roman numeral"></input>
                        <div className="align-right">
                            <select id="operator" onChange={this.onSelectChange}>
                                <option value="add">+</option>
                                <option value="subs">-</option>
                                <option value="mult">x</option>
                                <option value="div">/</option>
                            </select></div>
                        {this.state.result ? (<big>Result: <b>{this.state.result}</b> </big>) : null}
                        {this.state.error ? (<small>*{this.state.error}</small>) : null}
                        <button type="submit">Calculate</button>
                    </form>
                    <hr></hr>
                    <Rules />
                </div>
            </div>
        )
    }
}
export default Calculate;

