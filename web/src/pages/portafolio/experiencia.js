import { useEffect, useState } from "react";
import useDatosPortafolio from "../../hooks/useDatosPortafolio";
import Titulo from "./titulo";
import styles from "../../styles/portafolio/portafolio.module.css";

const Experiencia = () => {
    const { solicitarExperiencia } = useDatosPortafolio();
    const [experiencia, setExperiencia] = useState([]);

    useEffect(() => solicitarExperiencia(setExperiencia), []);
    
    return(
        <div id="experiencia">
            <Titulo texto="Experiencia"/>
            <ul>
                {experiencia.map((exp, index) =>
                    <li
                        key={`experiencia-${index}`}
                        className={styles.experiencia}
                    >{exp.descripcion}</li>
                )}
            </ul>
        </div>
    );
}

export default Experiencia;