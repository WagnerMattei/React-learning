import React from 'react';
import Grid from '@material-ui/core/Grid';

export default props => (
    <Grid container spacing={16}>
        <Grid item xs={12}>
            <Grid spacing={props.spacing || 40} container justify={props.justify || 'flex-start'} direction="row">
                {props.children}
            </Grid>
        </Grid>
    </Grid>
)
