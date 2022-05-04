import { useEffect, useState } from "react";
import styles from "../../styles/portafolio/portafolio.module.css";
import Divisor from "../../components/divisor";
import Titulo from "./titulo";
import Habilidades from "./habilidades";
import Experiencia from "./experiencia";
import Proyectos from "./proyectos";
import useDatosPortafolio from "../../hooks/useDatosPortafolio";

const Contenido = () =>
    <div className={styles.contenidoPortafolio}>
        <SobreMi/>
        <Divisor/>
        <Habilidades/>
        <Divisor/>
        <Experiencia/>
        <Divisor/>
        <Proyectos/>
    </div>

const SobreMi = () => {
    const [sobreMi, setSobreMi] = useState("");
    const { solicitarVariable } = useDatosPortafolio();

    useEffect(() => solicitarVariable("sobre_mi", setSobreMi), []);

    return(
        <div id="sobre-mi">
            <Titulo texto="Sobre Mí"/>
            <p className={styles.descripcionSobreMi}>{sobreMi}</p>
        </div>
    );
}

export default Contenido;