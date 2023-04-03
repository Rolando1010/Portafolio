const technologies = {
    ".net": {
        color: "#633ba3",
        name: ".NET",
        image: "/dotnet.png"
    },
    "sqlserver": {
        color: "#f2b001",
        name: "SQL Server",
        image: "/sqlserver.png"
    },
    "jira": {
        color: "#247df2",
        name: "JIRA",
        image: ""
    },
    "scrum": {
        color: "#1c76b6",
        name: "SCRUM",
        image: ""
    },
    "django": {
        color: "#092e20",
        name: "Django",
        image: "/django.png"
    },
    "react": {
        color: "#00d8ff",
        name: "React",
        image: "/react.png"
    },
    "firebase": {
        color: "#ffcb2b",
        name: "Firebase",
        image: "/firebase.png"
    },
    "css": {
        color: "#1572b6",
        name: "CSS",
        image: "/css.png"
    },
    "postgre": {
        color: "#2f6792",
        name: "PostgreSQL",
        image: "/postgre.png"
    },
    "aws": {
        color: "#f29100",
        name: "AWS",
        image: "/aws.jfif"
    },
    "c#": {
        color: "#9b4f96",
        name: "C#",
        image: "/cs.png"
    },
    "python": {
        color: "#4586b9",
        name: "Python",
        image: "/python.png"
    },
    "js": {
        color: "#dab92d",
        name: "Javascript",
        image: "/js.png"
    },
    "visualbasic": {
        color: "#004a85",
        name: "Visual Basic",
        image: ""
    },
    "jquery": {
        color: "#0268ae",
        name: "JQuery",
        image: ""
    },
    "bootstrap": {
        color: "#713dbe",
        name: "Bootstrap",
        image: "/bootstrap.png"
    },
    "nextjs": {
        color: "#ffffff",
        name: "Next.js",
        image: "/nextjs.png"
    },
    "nodejs": {
        color: "#83cd29",
        name: "Node JS",
        image: "/nodejs.png"
    },
    "ts": {
        color: "#2d79c7",
        name: "TypeScript",
        image: "/ts.svg"
    },
    "html": {
        color: "#e44f26",
        name: "HTML",
        image: "/html.png"
    },
    "express": {
        color: "#ffffff",
        name: "Express",
        image: "/express.png"
    },
    "flask": {
        color: "#a8aab2",
        name: "Flask",
        image: "/flask.png"
    },
    "mongodb": {
        color: "#4caf50",
        name: "MongoDB",
        image: "/mongodb.png"
    },
    "sqlite": {
        color: "#0681cd",
        name: "SQLite",
        image: "/sqlite.png"
    },
    "react-native": {
        color: "#00d8ff",
        name: "React Native",
        image: "/react.png"
    },
    "java": {
        color: "#db380e",
        name: "Java",
        image: "/java.png"
    },
    "c++": {
        color: "#0080cd",
        name: "C++",
        image: "/c++.png"
    },
    "playwright": {
        color: "#45ba4b",
        name: "Playwright",
        image: "/playwright.png"
    },
    "kivy": {
        color: "#fbfbfb",
        name: "Kivy",
        image: ""
    },
    "twilio": {
        color: "#f22f46",
        name: "Twilio",
        image: ""
    },
    "cypress": {
        color: "#4fb58d",
        name: "Cypress",
        image: "/cypress.png"
    },
    "sequelize": {
        color: "#52b0e7",
        name: "Sequelize",
        image: ""
    },
    "webpack": {
        color: "#8ed5fa",
        name: "Webpack",
        image: "/webpack.png"
    },
    "cheerio": {
        color: "#e88c1f",
        name: "Cheerio",
        image: ""
    },
    "cloudinary": {
        color: "#3448c6",
        name: "Cloudinary",
        image: ""
    },
    "expo": {
        color: "#ffffff",
        name: "Expo",
        image: ""
    },
    "xmlhttprequest": {
        color: "#701516",
        name: "XMLHTTPRequest",
        image: ""
    },
    "co:here": {
        color: "#d18ee2",
        name: "Co:here",
        image: ""
    },
    "astro": {
        color: "#ff5a03",
        name: "Astro",
        image: ""
    },
    "tinymce": {
        color: "#0c132c",
        name: "TinyMCE",
        image: ""
    }
}

export type Technology = keyof typeof technologies;

const TechnologiesPills = ({ technologies: technologiesIDs }: {technologies: Technology[]}) => {
    return (<>
        <ul>
            {technologiesIDs.map((tid, index) => {
                const { color, name } = technologies[tid];
                return (
                    <li key={`technology-${index}`}>
                        <span className="technology-color" style={{backgroundColor: color}}></span>
                        <span className="technology-name">{name}</span>
                    </li>
                );
            })}
        </ul>
        <style jsx>{`
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            li {
                display: inline-block;
                background-color: var(--background-1);
                margin: 3px;
                padding: 10px 15px;
                border-radius: 20px;
            }

            .technology-color {
                width: 15px;
                height: 15px;
                display: inline-block;
                border-radius: 100%;
                margin-right: 7px;
            }

            .technology-name {
                font-size: 16px;
            }
        `}</style>
    </>);
}

const TechnologiesSprites = ({technologies: technologiesIDs}: {technologies: Technology[]}) => {
    return (<>
        <section>
            {technologiesIDs.map((technologyID, index) => {
                const { name, image } = technologies[technologyID];
                return (
                    <article key={`technology-${index}`}>
                        <img src={image} alt={`logo ${name}`}/>
                        <p>{name}</p>
                    </article>
                );
            })}
        </section>
        <style jsx>{`
            section {
                text-align: center;
            }

            article {
                display: inline-block;
                margin: 0 10px 40px 10px;
            }

            img {
                width: 90px;
                padding: 10px
            }

            p {
                margin: 0;
            }
        `}</style>
    </>);
}

export {
    TechnologiesPills,
    TechnologiesSprites
}