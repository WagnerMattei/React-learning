import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import If from '../../utils/if'

export default class SearchInput extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    /**
     * 
     */
    render()
    {
        const { filter } = this.props;
        return (

            <div>
                <Grid container
                    direction="row"
                    spacing={16}
                    alignItems="center"
                    justify="flex-start">
                    <Grid item xs={this.props.canAdd ? 10 : 12}>
                        <Card className="push-bottom">
                            <CardContent>
                                <TextField
                                    id="full-width"
                                    label="Búsqueda"
                                    value={filter}
                                    onChange={(e) => this.props.onSearch(e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="Busca por el nombre del profesor"
                                    fullWidth
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <If condition={this.props.canAdd}>
                        <Grid item>
                            <Button onClick={() => this.props.onAdd()} variant="contained" color="primary">
                                Nuevo Profesor
                                </Button>
                        </Grid>
                    </If >
                </Grid>
            </div>
        );
    }
}