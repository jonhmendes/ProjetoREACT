import React, { Component } from 'react';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import { Link } from 'react-router-dom';
//import DatePicker from 'react-native-datepicker';

class Inicial extends Component {

  constructor(props) {
    super(props);
    this.key = 0;

    this.state = {
      nome: '',
      descricao: '',
      dataHoraInicio: new Date(),
      dataHoraFim:new Date(),
      itemLista: '',
      lista: [],
      
    };
  }

  trataAlteracao(nomeInput, evento) {
    this.setState({[nomeInput]: evento.target.value}); 
  }

  adiciona(e) {
    e.preventDefault();
    this.setState(estadoAnterior => ({
      lista: estadoAnterior.lista.concat(this.state.itemLista)
    }));
  }

  render() {
    return (
      <div className="App">
        <Cabecalho titulo="Minha Agenda" />
        <p className="App-intro"><br/>
        <div className = 'agenda--form'>
        
        </div>
          <br/>
          <ul>
          Inserir lembrete {this.state.lista.map(item => (<li>{item}</li>))}
          </ul>
          {this.state.nome} - {this.state.descricao}

        </p>
        <form onSubmit={this.adiciona.bind(this)} >
          <div>
            <label htmlFor="entrada">Nome:</label>
            <input id="entrada" type="text" value={this.state.nome} onChange={this.trataAlteracao.bind(this, 'nome')} />
          </div>
          <br/><br/>
          <div>
            <label htmlFor="descricao">descricao:</label>
            <input id="descricao" type="text" value={this.state.descricao} onChange={this.trataAlteracao.bind(this, 'descricao')} />
          </div>
          <br/><br/>
          <div>
          
          <button type="submit" > inserir lembrete</button>
          </div>
        
        </form>
        <br/><br/>
        <Link to="/agenda">Agendar tarefas</Link>
      </div>
    );
  }
}

export default Inicial;
