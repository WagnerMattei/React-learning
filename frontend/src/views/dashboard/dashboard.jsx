import React from 'react';
import PageTitle from '../../common/template/texts/page-title'
import Card from '../../common/template/card/card'
import Grid from '@material-ui/core/Grid';
import Row from '../../common/template/row/row'
import connect from 'react-redux';


class Dashboard extends React.Component
{
    render()
    {
        const {alumnos, asignaturas } = this.props.count
        return (
            <div>
                <PageTitle text={'Visión general'} />
                <Row>
                    <Grid item >
                        <Card label="Número de alumnos" value={alumnos} buttonText="MÁS INFORMACIÓN"
                            href="/#/alumnos" />
                    </Grid>
                    <Grid item>
                        <Card label="Número de asignaturas" value={asignaturas} buttonText="MÁS INFORMACIÓN"
                            href="/#/asignaturas" />
                    </Grid>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({count: state.dashboard.count})

export default connect(mapStateToProps)(Dashboard) 