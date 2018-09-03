import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class ProfesorForm extends Component
{
    /*---------------------------------------------------------------------------------
     *                                    CONSTRUCTOR
     *-------------------------------------------------------------------------------*/

    /**
     * 
     */
    constructor(props)
    {
        super(props);
        this.handleClose.bind(this);    
    }
    /*---------------------------------------------------------------------------------
     *                                    BEHAVIORS
     *-------------------------------------------------------------------------------*/

    handleClose()
    {
        this.props.onClose();
    };

    /**
     * 
     */
    save()
    {
        
    }
    /*---------------------------------------------------------------------------------
     *                                    RENDER
     *-------------------------------------------------------------------------------*/

    render()
    {
        const { open } = this.props;
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={() => this.handleClose()}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Nuevo Profesor</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Introduzca el nombre del profesor
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nombre"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.handleClose()} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={() => this.save()} color="primary">
                            Guardar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}