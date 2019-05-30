import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Inicial from  './Inicial';
import NovaTarefa from './componentes/tarefas/NovaTarefa';
import ListaTarefas from './componentes/tarefas/ListaTarefas';

ReactDOM.render(
    <Router>
        <App>
            <Route exact path="/" component={Inicial} />
            <Route path="/agenda" component={ListaTarefas} />
            <Route path="/novo" component={NovaTarefa} />
        </App>
    </Router>,
    
    document.getElementById('root'));
