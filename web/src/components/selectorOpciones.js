import styles from "../styles/components.module.css";
import { useState } from "react";

const SelectorOpciones = ({ titulos, componentes }) => {
    const [posOpcionSeleccionada, setPosOpcionSeleccionada] = useState(0);
    
    return(<>
        <ul className={styles.menuTitulosSelectorOpciones}>
            {(titulos || []).map((titulo, index) =>
                <li
                    key={`selector-opciones-titulo-${index}`}
                    className={`${styles.tituloSelectorOpciones} ${posOpcionSeleccionada===index ? styles.activo : ""}`}
                    onClick={() => setPosOpcionSeleccionada(index)}
                >{titulo}</li>
            )}
        </ul>
        {(componentes || []).map((componente, index) =>
            <div
                key={`selector-opciones-componente-${index}`}
                style={{display: posOpcionSeleccionada===index ? "block" : "none"}}
                className={styles.contenedorComponenteSelectorOpciones}
            >
                {componente}
            </div>
        )}
    </>);
}

export default SelectorOpciones;