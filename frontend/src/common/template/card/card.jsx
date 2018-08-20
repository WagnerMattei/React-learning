import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default props => (
    <Card>
        <CardContent>
            <Typography color="textSecondary">
                {props.label}
            </Typography>
            <Typography variant="headline" component="h1">
                <p className="font-20">{props.value}</p>
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" href={props.href}>{props.buttonText}</Button>
        </CardActions>
    </Card>
)