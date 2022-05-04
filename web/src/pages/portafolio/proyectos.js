import { useEffect, useState } from "react";
import styles from "../../styles/portafolio/portafolio.module.css";
import Titulo from "./titulo";
import { ContenedorGutter, GutterMedio } from "../../components/gutters";
import useDatosPortafolio from "../../hooks/useDatosPortafolio";

const Proyectos = () =>{
    const [proyectos, setProyectos] = useState([]);
    const { solicitarProyectos } = useDatosPortafolio();

    useEffect(() => solicitarProyectos(setProyectos), []);

    return(
        <div id="proyectos">
            <Titulo texto="Proyectos"/>
            {proyectos.map((proyecto, index) =>
                <Proyecto key={`proyecto-${index}`} {...proyecto}/>
            )}
        </div>
    );
}

const Proyecto = ({ titulo, descripcion, usos_tecnologias, imagen, urls }) =>
    <div className={styles.proyecto}>
        <p className={styles.tituloProyecto}>{titulo}</p>
        <ContenedorGutter>
            <GutterMedio>
                <div className={styles.descripcionProyecto}>
                    {descripcion}
                    <UsosTecnologias usosTecnologias={usos_tecnologias}/>
                </div>
            </GutterMedio>
            <GutterMedio style={styles.w100}>
                <img src={imagen} className={styles.w100}/>
            </GutterMedio>
        </ContenedorGutter>
        <div className={styles.contenedorBotonesURLProyecto}>
            {(urls || []).map((url, index) =>
                <BotonURL
                    key={`proyecto-url-${index}`}
                    url={url}
                />
            )}
        </div>
        <div className={styles.contenedorBotonVerTodosProyectos}></div>
    </div>

const UsosTecnologias = ({ usosTecnologias }) => <>
    <p className={styles.tituloUsoTecnologias}>Tecnologías usadas:</p>
    <div className={styles.contenedorUsosTecnologias}>
        {usosTecnologias.map((uso, index) =>
            <div className={styles.usoTecnologias} key={`uso-tecnologias-${index}`}>
                {uso.uso}: <p className={styles.tecnologias}>
                    {uso.tecnologias.map(tec => tec.nombre).join(", ")}
                </p>
            </div>
        )}
    </div>
</>

const BotonURL = ({ url }) =>
    <a
        href={url.url}
        className={styles.botonURLProyecto}
        target="_blank"
    >Ver {url.titulo_ver}</a>

export default Proyectos;