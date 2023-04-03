import { useState } from "react";
import { TechnologiesSprites } from "./technologies";
import Title from "./title";
import useTranslation from "src/hooks/use-translation";

const Knowledge = () => {
    const translation = useTranslation();

    return (<>
        <Title id="knowledge">{translation.KNOWLEDGE}</Title>
        <TabMenu options={[
            {title: translation.MORE_USED, element: <TechnologiesSprites technologies={[
                "django", "react", "nextjs", "sqlserver", "css", "nodejs", "js", "ts", "python"
            ]}/>},
            {title: "Frontend", element: <TechnologiesSprites technologies={[
                "html", "css", "react", "bootstrap", "js", "ts", "react-native"
            ]}/>},
            {title: "Backend", element: <TechnologiesSprites technologies={[
                "django", "flask", "express", "nextjs", "nodejs", ".net"
            ]}/>},
            {title: translation.DATABASES, element: <TechnologiesSprites technologies={[
                "sqlserver", "mongodb", "postgre", "sqlite"
            ]}/>},
            {title: "Cloud", element: <TechnologiesSprites technologies={[
                "aws", "firebase"
            ]}/>},
            {title: translation.PROGRAMMING_LANGUAGES, element: <TechnologiesSprites technologies={[
                "python", "js", "ts", "c#", "java", "c++"
            ]}/>},
            {title: translation.TOOLS, element: <TechnologiesSprites technologies={[
                "cypress", "webpack"
            ]}/>}
        ]}/>
    </>);
}

const TabMenu = ({ options }: {options: {title: string, element: React.ReactNode}[]}) => {
    const [selected, setSelected] = useState(0);

    return (<>
        <ul>
            {options.map((option, index) =>
                <li
                    className={index === selected ? "selected" : ""}
                    key={`title-option-${index}`}
                    onClick={() => setSelected(index)}
                >{option.title}</li>
            )}
        </ul>
        <section>
            {options.map((option, index) =>
                <article
                    key={`component-option-${index}`}
                    className={index === selected ? "show" : "hide"}
                >
                    {option.element}
                </article>
            )}
        </section>
        <style jsx>{`
            ul {
                list-style: none;
                padding: 0;
                margin: 0;
                text-align: center;
            }

            li {
                display: inline-block;
                margin: 5px 15px;
                cursor: pointer;
                padding: 1px 4px 0 4px;
                border-top: 3px solid transparent;
                font-size: 18px;
            }
            
            .selected {
                color: var(--primary-1);
                border-top: 3px solid var(--primary-1);
            }

            .show {
                display: block;
            }

            .hide {
                display: none;
            }
        `}</style>
    </>);
}

export default Knowledge;