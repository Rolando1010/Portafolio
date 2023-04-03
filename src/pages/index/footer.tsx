import { NameTitle } from "./title";
import Contact from "./contact";

const Footer = () => {
    return (<>
        <footer>
            <section>
                <article>
                    <NameTitle/>
                </article>
                <article>
                    <Contact/>
                </article>
            </section>
        </footer>
        <style jsx>{`
            footer {
                padding: 0 25px;
            }

            section {
                max-width: 1000px;
                margin: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-top: 1px solid var(--font-color-2);
                padding: 15px 0;
            }
        `}</style>
    </>);
}

export default Footer;