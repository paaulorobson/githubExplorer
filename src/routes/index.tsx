import React from 'react'
import {Switch, Route} from 'react-router-dom'
// instalar os tipos para usar o react-router-dom
// yarn add -D @types/react-router-dom

import Dashboard from '../pages/Dashboard'
import Repository from '../pages/Repository'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            {/* passando parametro na rota */}
            <Route path="/repository/:repository+" component={Repository} /> 
        </Switch>
    )
}

export default Routes;