import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';



export default class NovaTarefa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataHoraInicio: '',
            dataHoraFim: '',
            descricao: '',
            nome: '',
            sucesso: false
        };
    }

    trataAlteracao(nomeInput, evento) {
        this.setState({[nomeInput]: evento.target.value});
    }

    enviar(evento) {
        evento.preventDefault();

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({dataHoraInicio: this.state.dataHoraInicio, 
                dataHoraFim: this.state.dataHoraFim, descricao: this.state.descricao, 
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
            })
        ;
        ('#datetimepicker').data("datetimepicker2").FUNCTION()
    }

    render() {
        if (this.state.sucesso) {
            return <Redirect to="/agenda" />;
        }

        return (
            <div class="container">
                <h1>Cadastro de tarefas</h1>

                <Link to="/agenda">Voltar</Link>

                <form onSubmit={this.enviar.bind(this)}>    

                
                <label htmlFor="dataHoraInicio">dataHoraInicio:</label>
                    <input id="dataHoraInicio" type="datetime" value = {this.state.dataHoraInicio} onChange={this.trataAlteracao.bind(this, 'dataHoraInicio')} />
                    <br/>
                <label htmlFor="dataHoraFim">dataHoraFim:</label>
                    <input id="dataHoraFim" type="datetime" onChange={this.trataAlteracao.bind(this, 'dataHoraFim')} />
                    <br/>

                    <label htmlFor="descricao">descricao:</label>
                    <input id="descricao" type="text" onChange={this.trataAlteracao.bind(this, 'descricao')} />
                    <br/> <br/>
                    <label htmlFor="nome">Nome:</label>
                    <input id="nome" type="text" onChange={this.trataAlteracao.bind(this, 'nome')} />
                    
                   
                    <br/>

                    <button type="submit">Enviar</button>
                    <div class="container">
    <div class="row">
        <div class='col-sm-6'>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker2'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            $(function () {
                ('#datetimepicker2').datetimepicker({
                    locale: 'ru'
                })
            });
        </script>
    </div>
</div>
                </form>
            </div>
        );
    }
}