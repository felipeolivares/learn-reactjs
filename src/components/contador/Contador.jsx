import React, { Component } from "react";
import './Contador.css'
import Display from './Display';

export default class Contador extends Component {
  // constructor(props){
  //     super(props)
  //     this.state = {
  //         passo: props.passo,
  //         valor: 0
  //     }
  // }

  state = {
    passo: this.props.passo || 1,
    valor: this.props.valor || 0,
  };

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <div>
          <label for="passoInput">Passo: </label>
          <input
            id="passoInput"
            type="number"
            value={this.state.passo}
            onChange={(e) => this.setState({ passo: +e.target.value })}
          />
        </div>

        <Display valor={this.state.valor}></Display>
        <div>
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
        </div>
      </div>
    );
  }
}
