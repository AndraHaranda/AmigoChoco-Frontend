import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import login from './Pages/Login/login'
import main from './Pages/Principal/main'
import index from './Pages/Cursos/index'
import register from './Pages/Cadastro/register'
import pessoas from './Pages/Pessoas/Pessoas'
import EditarCurso from './Pages/Cursos/EditarCurso'

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route path= "/" exact component={login} />
        <Route path= "/main" exact component={main} />
        <Route path= "/cursos" exact component={index} />
        <Route path= "/cadastro" exact component={register} />
        <Route path= "/pessoas" exact component={pessoas} />
        <Route path= "/editarCurso" exact component={EditarCurso} />
   
    </Switch>
</BrowserRouter>
);

export default Routes;