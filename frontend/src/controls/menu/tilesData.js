import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ContactsIcon from '@material-ui/icons/Contacts';
import SettingsIcon from '@material-ui/icons/SettingsApplications';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import Tooltip from '@material-ui/core/Tooltip';


export const mailFolderListItems = (
    <div>
        <Tooltip title="Profesores" placement="right">
            <ListItem href='/profesores' href>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Profesores" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Asignaturas" placement="right">
            <ListItem button>
                <ListItemIcon>
                    <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary="Asignaturas" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Alumnos" placement="right">
            <ListItem button>
                <ListItemIcon>
                    <ContactsIcon />
                </ListItemIcon>
                <ListItemText primary="Alumnos" />
            </ListItem>
        </Tooltip>
    </div>
);

export const otherMailFolderListItems = (
    <div>
        <Tooltip title="Configuraciones del sistema" placement="right">
            <ListItem button>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Configuraciones" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Configuraciones de la página de início" placement="right">
            <ListItem button>
                <ListItemIcon>
                    <AspectRatioIcon />
                </ListItemIcon>
                <ListItemText primary="Página de início" />
            </ListItem>
        </Tooltip>
    </div>
);