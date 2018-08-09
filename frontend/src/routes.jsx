import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'

import AlumnosComponent from './views/alumnos/alumnos-component.jsx';
import AsignaturasComponent from './views/asignaturas/asignaturas-component.jsx';
import ConfiguracionesComponent from './views/configuraciones/configuraciones-component.jsx';
import PaginaInicialComponent from './views/pagina-inicial/pagina-inicial-component.jsx';
import ProfesoresComponent from './views/profesores/profesores-component.jsx';


export default props => (
    <HashRouter>
        <div>
            <Route path='/alumnos' component={AlumnosComponent} />
            <Route path='/asignaturas' component={AsignaturasComponent} />
            <Route path='/configuraciones' component={ConfiguracionesComponent} />
            <Route path='/pagina-inicial' component={PaginaInicialComponent} />
            <Route path='/profesores' component={ProfesoresComponent} />
            <Redirect from='*' to="/alumnos" />
        </div>
    </HashRouter>
)