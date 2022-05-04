import styles from "../styles/components.module.css";

const ContenedorGutter = ({ children }) =>
    <div className={styles.contenedorGutter}>
        {children}
    </div>

const GutterMedio = ({ style, children }) =>
    <div className={`${styles.gutterMedio} ${style || ""}`}>
        {children}
    </div>

export {
    ContenedorGutter,
    GutterMedio
}