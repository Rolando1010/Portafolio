import { useMemo, useState } from "react";
import { TechnologiesPills, type Technology } from "./technologies";
import Title from "./title";
import { Gutter, GutterContainer } from "src/components/gutters";
import useTranslation from "src/hooks/use-translation";

type Project = {
    sprite: string,
    name: string,
    description: string,
    technologies?: Technology[],
    partTechnologies?: {title: string, ids: Technology[]}[],
    links: {name: string, url: string}[]
};

const getProjects = (translation: ReturnType<typeof useTranslation>): Project[] => [{
    sprite: "/discrete-math.png",
    name: translation.DISCRETE_MATH_NAME,
    description: translation.DISCRETE_MATH_DESCRIPTION,
    partTechnologies: [
        {title: translation.WEBSITE, ids: ["django", "nextjs", "firebase", "playwright", "css", "python", "js"]},
        {title: translation.MOBILE_APP, ids: ["kivy", "python"]}
    ],
    links: [
        {name: translation.WEBSITE, url: "https://matematica-discreta.com/"},
        {name: translation.MOBILE_APP, url: "https://play.google.com/store/apps/details?id=org.matematica_discreta_v_1_0.matematica_discreta"}
    ]
}, {
    sprite: "/secret-chat.png",
    name: "Secret Chat",
    description: translation.SECRET_CHAT_DESCRIPTION,
    technologies: ["nodejs", "react", "twilio", "cypress", "sequelize" ,"sqlite", "webpack", "css"],
    links: [
        {name: translation.WEBSITE, url: "https://secret-chat.onrender.com/"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/Secret-Chat"},
        {name: "LinkedIn", url: "https://www.linkedin.com/feed/update/urn:li:activity:7018597130990743553/"}
    ]
}, {
    sprite: "/impage.png",
    name: "Impage",
    description: translation.IMPAGE_DESCRIPTION,
    technologies: ["nextjs", "cloudinary", "ts", "css", "cheerio"],
    links: [
        {name: translation.WEBSITE, url: "https://impage.vercel.app/"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/Impage"}
    ]
}, {
    sprite: "/todolist.png",
    name: "ToDoList",
    description: translation.TODOLIST,
    technologies: ["nodejs", "express", "mongodb", "html", "css", "js"],
    links: [
        {name: translation.WEBSITE, url: "https://todolist-z11d.onrender.com/"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/ToDoList"}
    ]
}, {
    sprite: "/calendar.png",
    name: translation.WORK_CALENDAR_NAME,
    description: translation.WORK_CALENDAR_DESCRIPTION,
    technologies: ["react", "firebase", "bootstrap", "css", "js"],
    links: [
        {name: translation.WEBSITE, url: "https://dazzling-shirley-0144db.netlify.app/"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/Calendario"}
    ]
}, {
    sprite: "/trainings.png",
    name: translation.WORKOUTS_NAME,
    description: translation.WORKOUTS_DESCRIPTION,
    technologies: ["react-native", "expo", "js"],
    links: [
        {name: translation.MOBILE_APP, url: "https://play.google.com/store/apps/details?id=workouts.v1"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/Entrenamientos"}
    ]
}, {
    sprite: "/recommender.png",
    name: "Recommender",
    description: translation.RECOMMENDER_DESCRIPTION,
    technologies: ["nextjs", "co:here", "cheerio", "playwright", "ts"],
    links: [
        {name: translation.WEBSITE, url: "https://recommender-ai.vercel.app/"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/Recommender"}
    ]
}, {
    sprite: "/password-generator.png",
    name: translation.PASSWORD_GENERATOR_NAME,
    description: translation.PASSWORD_GENERATOR_DESCRIPTION,
    technologies: ["astro", "js", "html", "css"],
    links: [
        {name: translation.WEBSITE, url: "https://hacktoberfest-2022.vercel.app/entry/Rolando1010"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/hacktoberfest-2022"}
    ]
}, {
    sprite: "/combperm.png",
    name: translation.COMBPERM_NAME,
    description: translation.COMBPER_DESCRIPTION,
    partTechnologies: [
        {title: translation.WEBSITE, ids: ["flask", "js", "bootstrap", "html", "css", "python"]},
        {title: translation.MOBILE_APP, ids: ["kivy", "python"]}
    ],
    links: [
        {name: translation.WEBSITE, url: "http://combperm.pythonanywhere.com/"},
        {name: translation.MOBILE_APP, url: "https://play.google.com/store/apps/details?id=org.combinaciones_y_permutaciones_v_1_0.combinaciones_y_permutaciones"}
    ]
}, {
    sprite: "/motorcyclists.png",
    name: translation.MOTOCYCLISTS_AGENCY_NAME,
    description: translation.MOTOCYCLISTS_AGENCY_DESCRIPTION,
    technologies: ["flask", "js", "xmlhttprequest", "bootstrap", "html", "css"],
    links: [
        {name: translation.WEBSITE, url: "http://motociclistasportafolio.pythonanywhere.com/"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/Motociclistas"}
    ]
}, {
    sprite: "/polls.png",
    name: translation.POLLS_SITE_NAME,
    description: translation.POLLS_SITE_DESCRIPTION,
    technologies: ["django", "js", "sqlite", "bootstrap", "python", "html", "css"],
    links: [
        {name: translation.WEBSITE, url: "http://encuestasportafolio.pythonanywhere.com/"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/Encuestas"}
    ]
}, {
    sprite: "/memory.png",
    name: translation.MEMORY_GAME_NAME,
    description: translation.MEMORY_GAME_DESCRIPTION,
    technologies: ["flask", "js", "sqlite", "bootstrap", "html", "css"],
    links: [
        {name: translation.WEBSITE, url: "http://memoriaportafolio.pythonanywhere.com/"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/Juego-de-Memoria"}
    ]
}, {
    sprite: "/boutique.png",
    name: "Boutique",
    description: translation.BOUTIQUE_DESCRIPTION,
    technologies: ["html", "css", "js"],
    links: [
        {name: translation.WEBSITE, url: "https://glittery-nougat-0d114d.netlify.app/"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/Boutique"}
    ]
}, {
    sprite: "fishing-store.png",
    name: translation.FISHING_STORE_NAME,
    description: translation.FISHING_STORE_DESCRIPTION,
    technologies: ["html", "css", "js", "bootstrap"],
    links: [
        {name: translation.WEBSITE, url: "https://marvelous-mochi-efe029.netlify.app/"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/Tienda-de-Pesca"}
    ]
}, {
    sprite: "/email.png",
    name: translation.EMAIL_NOTIFICATION_NAME,
    description: translation.EMAIL_NOTIFICATION_DESCRIPTION,
    technologies: ["flask", "tinymce", "sqlite", "js", "bootstrap", "python", "html", "css"],
    links: [
        {name: translation.WEBSITE, url: "http://notificacioncorreosportafolio.pythonanywhere.com/"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/Notificaci-n-por-Correo"}
    ]
}, {
    sprite: "/trivia.png",
    name: translation.TRIVIA_SITE_NAME,
    description: translation.TRIVIA_SITE_DESCRIPTION,
    technologies: ["django", "js", "sqlite", "bootstrap", "python", "html", "css"],
    links: [
        {name: translation.WEBSITE, url: "http://triviasportafolio.pythonanywhere.com/"},
        {name: translation.REPOSITORY, url: "https://github.com/Rolando1010/Trivias"}
    ]
}];

const PROJECTS_LIMIT = 6;

const Projects = () => {
    const [show, setShow] = useState(false);
    const translation = useTranslation();
    const projects = useMemo(() => getProjects(translation), []);

    return (<>
        <Title id="projects">Proyectos</Title>
        <GutterContainer>
            {projects.map((project, index) =>
                <Gutter percentage={50} key={`project-${index}`}>
                    <div style={{display: index < PROJECTS_LIMIT || show ? "block" : "none"}}>
                        <ProjectCard {...project}/>
                    </div>
                </Gutter>
            )}
        </GutterContainer>
        <button onClick={() => setShow(!show)}>
            {show ? translation.HIDE : `${translation.SHOW} ${projects.length - PROJECTS_LIMIT} ${translation.PROJECTS_MORE}`}
        </button>
        <style jsx>{`
            button {
                width: 100%;
                font-size: 20px;
                margin-top: 10px;
                border-radius: var(--border-radius);
                padding: 10px 0;
                border: 0;
                background-color: var(--primary-1);
                color: var(--font-color-1);
                cursor: pointer;
            }

            button:hover, button:focus {
                background-color: var(--primary-2);
            }
        `}</style>
    </>);
}

const ProjectCard = ({sprite, name, description, technologies, partTechnologies, links}: Project) => {
    return (<>
        <section>
            <img src={sprite} alt={`project sprite ${name}`}/>
            <h3>{name}</h3>
            <p>{description}</p>
            {technologies &&
                <article>
                    <TechnologiesPills technologies={technologies}/>
                </article>
            }
            {partTechnologies && (partTechnologies.map(({title, ids}, tindex) =>
                <article key={`technology-${tindex}-project-${name}`}>
                    <h4>{title}: </h4>
                    <TechnologiesPills technologies={ids}/>
                </article>
            ))}
            {links.map(({name: linkName, url}, lindex) =>
                <a
                    key={`link-${lindex}-project-${name}`}
                    href={url}
                    target="_blank"
                >{linkName}</a>
            )}
        </section>
        <style jsx>{`
            section {
                background: var(--background-2);
                padding: 10px;
                border-radius: var(--border-radius);
                margin: 10px;
            }

            h3, p, h4 {
                padding: 0 10px;
            }

            p {
                color: var(--font-color-2);
            }

            h4 {
                margin: 0 0 5px 0;
                font-weight: normal;
            }

            img {
                width: 100%;
                border-radius: var(--border-radius);
            }

            article {
                margin-bottom: 15px;
            }

            a {
                background-color: var(--primary-1);
                margin: 0 10px 5px 10px;
                color: var(--font-color-1);
                text-decoration: none;
                padding: 10px 20px;
                border-radius: var(--border-radius);
                display: inline-block;
            }

            a:hover, a:focus {
                background-color: var(--primary-2);
            }
        `}</style>
    </>);
}

export default Projects;