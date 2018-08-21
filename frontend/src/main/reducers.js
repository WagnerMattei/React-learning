import {combineReducers} from 'redux'
import DashboardReducer from '../views/dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer;