import Grid from '@material-ui/core/Grid';
import React from 'react';
import Card from '../../common/template/card/card';
import Row from '../../common/template/row/row';
import PageTitle from '../../common/template/texts/page-title';
import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {alumnosCount: 0, asignaturasCount: 0}
    }

    componentWillMount() 
    {
        axios.get(`${BASE_URL}/asignaturas/count`)
            .then(resp => this.setState({asignaturasCount: resp.data.value}))
        axios.get(`${BASE_URL}/alumnos/count`)
            .then(resp => this.setState({alumnosCount: resp.data.value}))
    }
    render()
    {
        const {alumnosCount, asignaturasCount} = this.state
        return (
            <div>
                <PageTitle text={'Visión general'} />
                <Row>
                    <Grid item >
                        <Card label="Número de alumnos" value={alumnosCount} buttonText="MÁS INFORMACIÓN"
                            href="/#/alumnos" />
                    </Grid>
                    <Grid item>
                        <Card label="Número de asignaturas" value={asignaturasCount} buttonText="MÁS INFORMACIÓN"
                            href="/#/asignaturas" />
                    </Grid>
                </Row>
            </div>
        )
    }
}