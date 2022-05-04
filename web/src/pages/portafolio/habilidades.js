import { useEffect, useState } from "react";
import styles from "../../styles/portafolio/portafolio.module.css";
import Titulo from "./titulo";
import SelectorOpciones from "../../components/selectorOpciones";
import useDatosPortafolio from "../../hooks/useDatosPortafolio";

const Habilidades = () => {
    const [habilidades, setHabilidades] = useState([]);
    const { solicitarHabilidades } = useDatosPortafolio();

    useEffect(() => solicitarHabilidades(setHabilidades), []);

    return(
        <div id="habilidades">
            <Titulo texto="Habilidades"/>
            <div className={styles.contenedorHabilidades}>
                <SelectorOpciones
                    titulos={habilidades.map(habilidad => habilidad.nombre)}
                    componentes={habilidades.map((habilidad, index) =>
                        <HabilidadesCategoria
                            key={`categoria-habilidad-${index}`}
                            habilidades={habilidad.habilidades}
                        />
                    )}
                />
            </div>
        </div>
    );
}

const HabilidadesCategoria = ({ habilidades }) => <>
    {(habilidades || []).map((habilidad, index) =>
        <Habilidad
            key={`habilidad-${index}`}
            imagen={habilidad.imagen}
            nombre={habilidad.nombre}
        />
    )}
</>

const Habilidad = ({ imagen, nombre }) =>
    <div className={styles.contenedorHabilidad}>
        <img
            src={imagen}
            className={styles.imagenHabilidad}
        />
        <p className={styles.nombreHabilidad}>{nombre}</p>
    </div>

export default Habilidades;