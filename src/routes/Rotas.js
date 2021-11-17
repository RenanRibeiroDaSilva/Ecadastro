import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';

import Inicio from '../pages/Inicio'
import CadastrosFuncionarios from '../pages/CadastrosFuncionarios'

export default function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/cadastrosFuncionarios" component={CadastrosFuncionarios} />
            </Switch>
        </HashRouter>
    )
}