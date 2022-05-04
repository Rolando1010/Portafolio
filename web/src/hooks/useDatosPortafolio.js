import axios from "axios";

const useDatosPortafolio = () => {
    const rutaAPI = "api";

    const solicitarVariable = (nombreVariable = "", callbackSetDato = () => {}) => {
        axios.get(`${rutaAPI}/variables/${nombreVariable}`).then(respuesta => callbackSetDato(respuesta.data));
    }

    const solicitarContactos = (callbackSetDatos = () => {}) => {
        axios.get(`${rutaAPI}/contactos`).then(respuesta => callbackSetDatos(respuesta.data));
    }
    
    const solicitarHabilidades = (callbackSetDatos = () => {}) => {
        axios.get(`${rutaAPI}/habilidades`).then(respuesta => callbackSetDatos(respuesta.data));
    }

    const solicitarProyectos = (callbackSetDatos = () => {}) => {
        axios.get(`${rutaAPI}/proyectos`).then(respuesta => callbackSetDatos(respuesta.data));
    }

    const solicitarExperiencia = (callbackSetDatos = () => {}) => {
        axios.get(`${rutaAPI}/experiencia`).then(respuesta => callbackSetDatos(respuesta.data));
    }

    return {
        solicitarContactos,
        solicitarVariable,
        solicitarHabilidades,
        solicitarProyectos,
        solicitarExperiencia
    }
}

export default useDatosPortafolio;