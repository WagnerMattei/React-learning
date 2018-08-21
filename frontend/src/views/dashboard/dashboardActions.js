import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getCount(){
    const requestAlumno = axios.get(`${BASE_URL}/alumnos/count`)
    const requestAsignatura = axios.get(`${BASE_URL}/asignaturas/count`)
    return {
        type: 'COUNT_FETCHED',
        payloadAlumno: requestAlumno,
        payloadAsignatura: requestAsignatura
    }
}