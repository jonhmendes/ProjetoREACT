
import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import {Title, Wrapper,Button,StyledLink} from './styles'

export default class ListaTarefas extends Component {

    Url = 'http://localhost:8080/agenda';

    delete = (id) => {
        this.props.delete(id);
    }

    onEdit = (agenda) => {
        PubSub.publish('edit-agenda', agenda);
    }

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
            .catch(erro => this.setState({msgErro: erro.message})
            );
    }

    save = (agenda) => {
        let data = {
            id: parseInt(agenda.id),
            dataHoraInicio: agenda.dataHoraInicio,
            dataHoraFim:  agenda.dataHoraFim,
            descricao: agenda.descricao,
            nome: agenda.nome,

        };
        console.log(data);

        const requestInfo = {
            method: data.id !== 0? 'PUT': 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        if(data.id === 0) {
            // CREATE NEW PRODUCT
            fetch(this.Url, requestInfo)
            .then(response => response.json())
            .then(newProduct => {
                let { agendas } = this.state;
                agendas.push(newProduct);
                this.setState({ agendas, message: { text: 'Novo produto adicionado com sucesso!', alert: 'success' } });
                this.timerMessage(3000);
            })
            .catch(e => console.log(e)); 
        } else {
            // EDIT PRODUCT
            fetch(`${this.Url}/${data.id}`, requestInfo)
            .then(response => response.json())
            .then(updatedProduct => {
                let { agendas } = this.state;
                let position = agendas.findIndex(agenda => agenda.id === data.id);
                agendas[position] = updatedProduct;
                this.setState({ agendas, message: { text: 'Produto atualizado com sucesso!', alert: 'info' } });
                this.timerMessage(3000);
            })
            .catch(e => console.log(e)); 
        }
    }


    delete = (id) => {

        fetch(`${this.Url}/delete/${id}`, {method: 'DELETE'})
            .then(response => response.json())
            .then(rows => {
                const novoItem = this.state.agenda.filter(agenda => {
                   return  agenda !== id
                });
                this.setState({ 
                    agenda:[...novoItem]
                } )   
                if(novoItem.length === 0){
                    this.setState({
                        message: 'sem items na lista'
                    })
                }
            })
            .catch(e => console.log(e));  
    }

    timerMessage = (duration) => {
        setTimeout(() => {
            this.setState({ message: { text: '', alert: ''} });
        }, duration);
    }

    render() {
        return (
            
            <Wrapper>
                <Title>lista de Eventos</Title>
                <StyledLink to="/" >Voltar</StyledLink>
                
                <StyledLink to="/novo" >Nova tarefa</StyledLink>
                
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descricao</th>
                            <th>Data-Hora de inicio</th>
                            <th>Data-Hora fim</th>
                            <th>Ações</th>

                        </tr>
                    </thead>
                    <tbody>
                        { this.state.agenda.map(agenda => (
                        
                            <tr key={agenda}>
                            <td >{agenda.nome}</td>
                            <td>{agenda.descricao}</td>
                            <td>{agenda.dataHoraInicio}</td>
                            <td>{agenda.dataHoraFim}</td>
                            <td>
                    <Button onClick={e => this.onEdit(agenda)} >Edit</Button>
                    <Button onClick={e => this.delete(agenda.id)} >Delete</Button>
                    </td>
                        
                        </tr>

                        ))
                    }
                    </tbody>
                </table>
            </Wrapper>
        );
     
    }
 


}