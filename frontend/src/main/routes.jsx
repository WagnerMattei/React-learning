import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Dashboard from '../views/dashboard/dashboard'
import Alumnos from '../views/alumnos/alumnos'
import Asignaturas from '../views/asignaturas/asignaturas'
import Profesores from '../views/profesores/profesores'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard}/>
        <Route path="/alumnos" component={Alumnos}/>
        <Route path="/asignaturas" component={Asignaturas}/>
        <Route path="/profesores" component={Profesores}/>
        <Redirect from="*" to="/" />
    </Router>
)