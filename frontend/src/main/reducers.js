import {combineReducers} from 'redux'
const INITIAL_STATE = {count: {alumnosCount: 0, asignaturasCount: 0}}
const rootReducer = combineReducers({
    dashboard: () => INITIAL_STATE
})

export default rootReducer;