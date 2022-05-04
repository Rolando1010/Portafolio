import { useEffect, useRef, useState } from "react";
import styles from "../../styles/portafolio/menu.module.css";
import Divisor from "../../components/divisor";
import useDatosPortafolio from "../../hooks/useDatosPortafolio";

const Menu = () =>{
    const [menuComprimido, setMenuComprimido] = useState(true);
    const [nombreProgramador, setNombreProgramador] = useState("");
    const [descripcionPersonal, setDescripcionPersonal] = useState("");
    const menuRef = useRef(null);
    const {
        solicitarVariable
    } = useDatosPortafolio();

    useEffect(() => {
        if(menuComprimido){
            menuRef.current.scrollTop = 0;
        }
    }, [menuComprimido]);

    useEffect(() => {
        solicitarVariable("nombre_programador", setNombreProgramador);
        solicitarVariable("descripcion_personal", setDescripcionPersonal);
    }, []);

    return(
        <div ref={menuRef} className={`${styles.menu} ${menuComprimido ? styles.menuComprimido : ""}`}>
            <p className={styles.nombre}>{nombreProgramador}</p>
            <div
                className={styles.menuToggle}
                onClick={() => setMenuComprimido(!menuComprimido)}
            >
                <i className={`fas fa-chevron-circle-${menuComprimido ? "down" : "up"}`}></i>
            </div>
            <Fotografia/>
            <p className={styles.descripcionPersonal}>{descripcionPersonal}</p>
            <ListaContactos/>
            <Divisor/>
            <Secciones/>
        </div>
    );
}

const Fotografia = () =>
    <div className={styles.fotografia}>
        <i className="fas fa-code"></i>
    </div>

const ListaContactos = () => {
    const [contactos, setContactos] = useState([]);
    const { solicitarContactos } = useDatosPortafolio();

    useEffect(() => solicitarContactos(setContactos), []);

    return(<>
        <ul className={styles.listaContactos}>
            {contactos.map((contacto, index) =>
                <Contacto
                    key={`contacto-${index}`}
                    link={contacto.url}
                    icono={contacto.icono_font_awesome}
                />
            )}
        </ul>
    </>)
}

const Contacto = ({ link, icono }) =>
    <a href={link} target="_blank">
        <li className={styles.contacto}>
            <i className={icono}></i>
        </li>
    </a>

const Secciones = () => {
    const [seccionActual, setSeccionActual] = useState(0);

    const secciones = [
        {icono: "fas fa-user fa-fw me-2", texto: "Sobre Mí", referencia: "sobre-mi"},
        {icono: "fas fa-laptop-code", texto: "Habilidades", referencia: "habilidades"},
        {icono: "fas fa-code-branch", texto: "Experiencia", referencia: "experiencia"},
        {icono: "fas fa-folder-open", texto: "Proyectos", referencia: "proyectos"}
    ];

    return(
        <ul className={styles.contenedorSecciones}>
            {secciones.map((seccion, index) =>
                <Seccion
                    key={`seccion-${index}`}
                    activo={index===seccionActual}
                    onClick={() => setSeccionActual(index)}
                    icono={seccion.icono}
                    texto={seccion.texto}
                    referencia={seccion.referencia}
                />
            )}
        </ul>
    )
}

const Seccion = ({ activo, onClick, icono, texto, referencia }) =>
    <li
        className={`${styles.contenedorSeccion} ${activo ? styles.activo : ""}`}
        onClick={onClick}
    >
        <a href={`#${referencia}`}>
            <i className={icono}></i>
            {texto}
        </a>
    </li>

export default Menu;