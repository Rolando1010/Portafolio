import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TechnologiesPills, type Technology } from "./technologies";
import Title from "./title";
import useTranslation from "src/hooks/use-translation";

const Experience = () => {
    const translation = useTranslation();

    return (<>
        <Title id="experience">{translation.EXPERIENCE}</Title>
        <TimeLine/>
    </>);
}

const TimeLine = () => {
    const translation = useTranslation();

    return (
        <VerticalTimeline animate={false}>
            <TimeLineElement
                companyName="Namu Travel Group"
                companyLogo="/namu-logo.jfif"
                jobName={translation.NAMU_JOB}
                functions={translation.NAMU_FUNCTIONS}
                timeInterval={translation.NAMU_PERIOD}
                technologies={[".net", "visualbasic", "c#", "sqlserver", "jira", "scrum"]}
            />
            <TimeLineElement
                companyName={translation.FREELANCE_JOB}
                companyLogo="/freelance.png"
                jobName="Freelance"
                functions={translation.FREELANCE_FUNCTIONS}
                timeInterval={translation.FREELANCE_PERIOD}
                technologies={["django", "react", "firebase", "css", "postgre", "aws", "python", "js"]}
            />
            <TimeLineElement
                companyName="Dinámica Consultores"
                companyLogo="/dinamica-logo.jfif"
                jobName={translation.DINAMICA_JOB}
                functions={translation.DINAMICA_FUNCTIONS}
                timeInterval={translation.DINAMICA_PERIOD}
                technologies={["css", "bootstrap", ".net", "js", "jquery"]}
            />
            <VerticalTimelineElement iconStyle={{background: "var(--background-1)"}}/>
        </VerticalTimeline>
    );
}

const TimeLineElement = ({ companyName, companyLogo, jobName, functions, timeInterval, technologies }: {
    companyName: string,
    companyLogo: string,
    jobName: string,
    functions: string[],
    timeInterval: string,
    technologies: Technology[]
}) => {
    return (<>
        <VerticalTimelineElement
            contentStyle={{background: "var(--background-2)", color: "var(--font-color-1)"}}
            contentArrowStyle={{borderRight: "7px solid var(--background-2)"}}
            date={timeInterval}
            iconStyle={{background: "var(--primary-1)"}}

        >
            <header>
                <img alt={`${companyName} logo`} src={companyLogo}/>
                <div className="experience-title">
                    <h3>{jobName}</h3>
                    <span>{companyName}</span>
                </div>
            </header>
            {functions.map((f, index) => 
                <p key={`function-${index}`}>{f}</p>
            )}
            <TechnologiesPills technologies={technologies}/>
        </VerticalTimelineElement>
        <style jsx>{`
            header {
                display: flex;
                gap: 10px;
                align-items: center;
            }

            header div {
                display: flex;
                flex-direction: column;

            }
            header img {
                width: 60px;
            }

            header h3 {
                margin: 0;
            }

            p{
                margin: 10px 0;
                font-weight: normal;
            }
        `}</style>
    </>);
}

export default Experience;