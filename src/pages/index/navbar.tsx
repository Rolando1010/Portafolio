import { useState } from "react";
import styles from "src/styles/navbar.module.css";
import { NameTitle } from "./title";
import useTranslation from "src/hooks/use-translation";

const Links = () => {
    const translation = useTranslation();

    return (<>
        <a href="#experience">{translation.EXPERIENCE}</a>
        <a href="#education">{translation.EDUCATION}</a>
        <a href="#projects">{translation.PROJECTS}</a>
        <a href="#knowledge">{translation.KNOWLEDGE}</a>
    </>);
}

const Navbar = () => {
    const [showResponsiveLinks, setShowResponsiveLinks] = useState(false);

    return (<>
        <div className={styles.separator}></div>
        <header className={styles.navbar}>
            <section>
                <article>
                    <NameTitle/>
                </article>
                <article className={styles.linksContainer}>
                    <Links/>
                    <button onClick={() => setShowResponsiveLinks(!showResponsiveLinks)}>
                        <img alt="bars navbar" src="/bars.svg"/>
                    </button>
                </article>
            </section>
        </header>
        <div className={`${styles.responsiveLinks} ${showResponsiveLinks ? styles.show : ""}`}>
            <Links/>
        </div>
    </>);
}

export default Navbar;