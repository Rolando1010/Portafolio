import { Gutter, GutterContainer } from "src/components/gutters";
import Contact from "./contact";
import useTranslation from "src/hooks/use-translation";

const Presentation = () => {
    const translation = useTranslation();

    return (<>
        <GutterContainer>
            <Gutter percentage={50}>
                <div className="text">
                    <h2>Rolando Mora</h2>
                    <span className="subtitle">{translation.SOFTWARE_DEVELOPER}</span>
                    <div className="badge">
                        <img
                            alt="aws certified cloud practitioner"
                            src="/aws-certified-cloud-practitioner.png"
                        />
                    </div>
                    <p>{translation.ABOUT_ME}</p>
                    <Contact/>
                    <Curriculum/>
                </div>
            </Gutter>
            <Gutter percentage={50}>
                <div className="image-container">
                    <img alt="icon portfolio" src="/icon.png"/>
                </div>
            </Gutter>
        </GutterContainer>
        <style jsx>{`
            .text h2 {
                margin: 0;
                font-size: 40px;
                color: var(--primary-1);
            }

            .text .subtitle {
                color: var(--font-color-2);
            }
            
            .badge img {
                width: 80px;
                margin: 8px 0 0px 0;
            }

            p {
                margin: 0;
                margin-bottom: 15px;
            }

            .image-container {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                height: 100%;
            }

            .image-container img {
                height: 250px;
            }

            @media (max-width: 800px) {
                .image-container img {
                    display: none;
                }
            }
        `}</style>
    </>);
}

const Curriculum = () => {
    const translation = useTranslation();

    return (<>
        <div>
            <a href="Rolando_Mora_Curriculum.pdf" target="_blank">
                <img alt="curriculum" src="/curriculum.svg"/>
                <span>{translation.WATCH_CURRICULUM}</span>
            </a>
        </div>
        <style jsx>{`
            div {
                display: flex;
            }

            a {
                display: flex;
                background-color: var(--primary-1);
                align-items: center;
                gap: 10px;
                padding: 10px 20px;
                color: var(--font-color-1);
                text-decoration: none;
                margin-top: 15px;
                border-radius: 15px;
            }

            a:hover, a:focus {
                background-color: var(--primary-2);
            }

            span {
                font-weight: bold;
            }

            img {
                width: 30px;
            }
        `}</style>
    </>);
}

export default Presentation;