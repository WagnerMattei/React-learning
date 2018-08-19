import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeoplesIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ContactsIcon from '@material-ui/icons/Contacts';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Tooltip from '@material-ui/core/Tooltip';


export default props => (
  <div>
    <Tooltip title="Dashboard" placement="right">
      <ListItem component={'a'} href="/#/" button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Página Inicial" />
      </ListItem>
    </Tooltip>
    <Tooltip title="Profesores" placement="right">
      <ListItem component={'a'} href="/#/profesores" button>
        <ListItemIcon>
          <PeoplesIcon />
        </ListItemIcon>
        <ListItemText primary="Profesores" />
      </ListItem>
    </Tooltip>
    <Tooltip title="Asignaturas" placement="right">
      <ListItem component={'a'} href="/#/asignaturas" button>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Asignaturas" />
      </ListItem>
    </Tooltip>
    <Tooltip title="Asignaturas" placement="right">
      <ListItem component={'a'} href="/#/alumnos" button>
        <ListItemIcon>
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText primary="Alumnos" />
      </ListItem>
    </Tooltip>
  </div>
);