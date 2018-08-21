const INITIAL_STATE = {count: {alumnosCount: 0, asignaturasCount: 0}}

export default function(state = INITIAL_STATE, action)
{
    switch (action.type)
    {
        case 'COUNT_FETCHED':
        {
            console.log(action.payloadAlumno.data);
            return {...state, count: {alumnosCount: action.payloadAlumno.data, asignaturasCount: action.payloadAsignatura.data} }
        }
        default:
            return state
    }
}