import React from 'react';
import { Router } from 'react-router';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ContactsIcon from '@material-ui/icons/Contacts';
import SettingsIcon from '@material-ui/icons/SettingsApplications';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import Tooltip from '@material-ui/core/Tooltip';
import { Redirect } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'


export class MailFolderListItems extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    state = {
        redirect: false
    }

    setRedirect = (route) =>
    {
        this.setState({
            redirect: true,
            route: route
        })
    }
    renderRedirect = () =>
    {
        if (this.state.redirect)
        {
            return (
                <HashRouter>
                    <div>
                        <Redirect to={this.state.route} />
                    </div>
                </HashRouter>)
        }
    }

    render()
    {
        return (
            <div>
                {this.renderRedirect()}
                <Tooltip title="Profesores" placement="right">
                    <ListItem button onClick={() => this.setRedirect('profesores')}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profesores" />
                    </ListItem>
                </Tooltip>
                <Tooltip title="Asignaturas" placement="right">
                    <ListItem button onClick={() => this.setRedirect('asignaturas')}>
                        <ListItemIcon>
                            <LibraryBooksIcon />
                        </ListItemIcon>
                        <ListItemText primary="Asignaturas" />
                    </ListItem>
                </Tooltip>
                <Tooltip title="Alumnos" placement="right">
                    <ListItem button onClick={() => this.setRedirect('alumnos')}>
                        <ListItemIcon>
                            <ContactsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Alumnos" />
                    </ListItem>
                </Tooltip>
            </div>
        )
    }
}
export class OtherMailFolderListItems extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    state = {
        redirect: false
    }

    setRedirect = (route) =>
    {
        this.setState({
            redirect: true,
            route: route
        })
    }
    renderRedirect = () =>
    {
        if (this.state.redirect)
        {
            return (
                <HashRouter>
                    <div>
                        <Redirect to={this.state.route} />
                    </div>
                </HashRouter>)
        }
    }

    render()
    {
        return (
            <div>
                {this.renderRedirect()}
                <Tooltip title="Configuraciones del sistema" placement="right">
                    <ListItem button onClick={() => this.setRedirect('configuraciones')}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Configuraciones" />
                    </ListItem>
                </Tooltip>
                <Tooltip title="Configuraciones de la página de início" placement="right">
                    <ListItem button onClick={() => this.setRedirect('pagina-inicial')}>
                        <ListItemIcon>
                            <AspectRatioIcon />
                        </ListItemIcon>
                        <ListItemText primary="Página de início" />
                    </ListItem>
                </Tooltip>
            </div>
        )
    }
}
