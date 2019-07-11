import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import {Title, Wrapper,StyledLink,Button} from './styles'
import ReactLightCalendar from '@lls/react-light-calendar'
import '@lls/react-light-calendar/dist/index.css'



export default class NovaTarefa extends Component {

    
    constructor(props) {
        super(props);
        const date = new Date()
        const dataHoraInicio = date.getTime()
        this.state = {
            
            descricao: '',
            nome: '',
            sucesso: false,
            dataHoraInicio, // Today
            dataHoraFim: new Date(dataHoraInicio).setDate(date.getDate() + 6) // T
        };

    }
    onChange = (dataHoraInicio, dataHoraFim) => this.setState({ dataHoraInicio, dataHoraFim })


    trataAlteracao(nomeInput, evento) {
        this.setState({[nomeInput]: evento.target.value});
    }

    enviar(evento) {
        evento.preventDefault();

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                dataHoraInicio: this.state.dataHoraInicio, 
                dataHoraFim: this.state.dataHoraFim, 
                descricao: this.state.descricao, 
                nome: this.state.nome}),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch('/agenda', requestInfo)
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({sucesso: true});
                }
            });
    }

    onDatesChange = ({ dataHoraInicio, dataHoraFim }) => {
        console.log(({ dataHoraInicio, dataHoraFim }));
    }

    render() {
        if (this.state.sucesso) {
            return <Redirect to="/agenda" />;
        }
     
        const { dataHoraInicio, dataHoraFim } = this.state

        return (
           
            <div>
            <Wrapper >
                <Title>Cadastro de tarefas</Title>

                <StyledLink to="/agenda" >Voltar</StyledLink>

                <form onSubmit={this.enviar.bind(this)}>    

                <div>
                <ReactLightCalendar startDate={dataHoraInicio} endDate={dataHoraFim} onChange={this.trataAlteracao.bind(this, 'dataHoraInicio')} range displayTime />
               
                
             

                    <label htmlFor="descricao">descricao:</label>
                    <input id="descricao" type="text" onChange={this.trataAlteracao.bind(this, 'descricao')} />
                    <br/> <br/>
                    <label htmlFor="nome">Nome:</label>
                    <input id="nome" type="text" onChange={this.trataAlteracao.bind(this, 'nome')} />
                   
                    <br/>
                    </div>
                    <Button type="submit">Enviar</Button>
                </form>
             </Wrapper>
             </div>
        );
    }
}