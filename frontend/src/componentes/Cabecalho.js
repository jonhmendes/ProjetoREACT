import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Cabecalho extends Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">{this.props.titulo}</h2>
        </header>
      );
    }
}