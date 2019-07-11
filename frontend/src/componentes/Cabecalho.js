import React, { Component } from 'react';

export default class Cabecalho extends Component {
    render() {
      return (
        <header className="App-header">
          <h2 className="App-title">{this.props.titulo}</h2>
        </header>
      );
    }
}

