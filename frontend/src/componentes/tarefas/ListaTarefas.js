
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ListaTarefas extends Component {

    constructor() {
        super();
        this.state = {
            msgErro: '',
            nome:'',
            descricao:'',
            agenda: []
        };
    }
    

    componentDidMount() {
        fetch('/agenda')
            .then(resposta => {
                if (resposta.status === 200) {
                    return resposta.json()
                }
                throw new Error('Erro no servidor');
            })
            .then(json => {
                this.setState({agenda: json});
            })
            .catch(erro => this.setState({msgErro: erro.message}));
    }

    render() {
        let agenda = this.state.agenda.map(a => 
            <tr>
                <td>{a.nome}</td>
            </tr>
    
        );
        let descricao = this.state.agenda.map(a =>
            <tr>
                <td>{a.descricao}</td>
            </tr>
            );

        return (
            <div>
                <h1>lista de Eventos</h1>
                <span><Link to="/" >Voltar</Link></span>
                <br/>  <br/>
                <span><Link to="/novo" >Nova tarefa</Link></span>
                {this.state.msgErro === '' ||
                    <span style={{color: 'red'}}>{this.state.msgErro}</span>
                }
                <table>
                    <thead>
                        <th><td>Nome</td></th>
                        <th><td>Descricao</td></th>
                        <th><td>Data-Hora de inicio</td></th>
                        <th><td>Data-Hora fim</td></th>
                    </thead>
                    <tbody>
                    <th><td>{agenda}</td></th>
                    <th><td>{descricao}</td></th>
                        
                    </tbody>
                </table>
            </div>
        );
    }

}