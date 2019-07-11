import React, { Component } from 'react';

//import DatePicker from 'react-native-datepicker';
import {Title, Wrapper,StyledLink,Button} from './componentes/tarefas/styles'

export default class Inicial extends Component {

  constructor(props) {
    super(props);
    this.key = 0;

    this.state = {
      nome: '',
      descricao: '',
      dataHoraInicio: new Date(),
      dataHoraFim:new Date(),
      itemLista: '',
      lista:[],
      novoItem: [],
      
    };
  }

  trataAlteracao(nomeInput, evento) {
    this.setState({[nomeInput]: evento.target.value}); 
  }

  adiciona(e) {
    e.preventDefault();
    const {addItem} = this.setState;
    

    this.setState({
      addItem: [...this.state.novoItem , addItem]
    });
  }

  add(e) {
    e.preventDefault();
    
    this.setState(estadoAnterior => ({
      novoItem: estadoAnterior.novoItem.concat(this.state.itemLista)
    })
    
    );
 
  }

  

  trataAlteracao(nomeInput, evento) {
    this.setState({[nomeInput]: evento.target.value}); 
  }

  removeItem(item){
    const novo =  this.state.novoItem.filter(lista => {
      return lista !== item;
    });
      this.setState({
        novoItem:[...novo]
      })
      if(novo.length === 0){
        this.setState({
          message:'sem items no seu rascunho LOCAL, adicione '
        })
      }
  } 

  render() {
    const { novoItem, message} = this.state;
    return (

 <div>
    

   <Wrapper>
              <form  onSubmit={this.add.bind(this)}>
                <div>
                    <label htmlFor="nome">adicione um novo item</label>
                    <input type="text" placeholder="qual nome do lembrete?" id="nome"value={this.state.nome} onChange={this.trataAlteracao.bind(this, 'nome')}/>
                </div>

                <div>
                    <label htmlFor="descricao">adicione uma descrição</label>
                    <input type="text" placeholder="digite um novo lembrete"value={this.state.descricao} onChange={this.trataAlteracao.bind(this, 'descricao')} />
                </div>

                <div>
                      <Button type="submit"> ADD</Button>
                </div>
              </form>

        <div>
              { 
                      (message !== '' || novoItem.length >0) && <p>{message}</p> 
                }
          
              {
                    novoItem.length >0 &&
            
            
          <table>
                <caption>Shopping</caption>
                    <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th >Atividade</th>
                            <th >Descrição</th>
                            <th >actions</th>
                          </tr>
                    </thead>

                    <tbody>
                        {
                          novoItem.map(item => {
                              return (
                      
                          <tr key={item}>
                            <th scope="row">1</th>
                              <td>{this.state.nome}</td>
                              <td>{this.state.descricao}</td> 
                              <td>  <Button onClick={e => this.removeItem(item)} >Delete</Button> </td>
                          </tr>
                                      )
                                              }
                                    )
                              
                                    }
                    </tbody>
          </table>
      }
        </div>
              <StyledLink to="/agenda" >Agendar tarefas</StyledLink>
    </Wrapper>
  </div>
    );
  }

}


