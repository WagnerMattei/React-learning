import React from 'react';
import PageTitle from '../../common/template/texts/page-title'
import Card from '../../common/template/card/card'
import Grid from '@material-ui/core/Grid';
import Row from '../../common/template/row/row'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { getCount } from './dashboardActions'

class Dashboard extends React.Component
{
    componentWillMount() 
    {
        this.props.getCount()
    }
    render()
    {
        console.log(this.props.count)
        const {alumnosCount, asignaturasCount} = this.props.count
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

const mapStateToProps = state => ({count: state.dashboard.count})
const mapDispatchToProps = dispatch => bindActionCreators({getCount}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) 