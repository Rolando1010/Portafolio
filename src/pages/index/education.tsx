import useTranslation from "src/hooks/use-translation";
import Title from "./title";

const Education = () => {
    const translation = useTranslation();

    return (<>
        <Title id="education">{translation.EDUCATION}</Title>
        <ul>
            <li>
                <EducationItem
                    image="/tec.png"
                    institution={translation.TEC}
                    career={translation.COMPUTER_ENGINEERING}
                    period={translation.TEC_PERIOD}
                />
            </li>
            <li>
                <EducationItem
                    image="/aws.jfif"
                    institution="AWS Certified Cloud Practitioner"
                    career="Amazon Web Services"
                    period={translation.AWS_CERTIFICATION_PERIOD}
                >
                    <article>
                        <img
                            alt="AWS Certified Cloud Practitioner"
                            src="/aws-certified-cloud-practitioner.png"
                        />
                        <div>
                            <a target="_blank" href="https://www.credly.com/badges/3778460a-0e50-468f-a911-9339e6c5b5ff/linked_in_profile">{translation.WATCH_AWS_CREDENTIAL}</a>
                        </div>
                    </article>
                </EducationItem>
            </li>
            <li>
                <EducationItem
                    image="/cuc.svg"
                    institution={translation.CUC}
                    career={translation.TI_DIPLOMATE}
                    period="2019 - 2020"
                />
            </li>
        </ul>
        <style jsx>{`
            ul {
                background-color: var(--background-2);
                padding: 25px 15px;
                list-style: none;
                margin: 0;
                border-radius: var(--border-radius);
            }

            li {
                border-bottom: 1px solid var(--font-color-2);
                padding-bottom: 20px;
                margin-bottom: 25px;
            }

            li:last-child {
                padding-bottom: 0px;
                margin-bottom: 0px;
                border: 0;
            }

            article {
                text-align: center;
            }

            img {
                width: 80px;
            }

            a {
                color: var(--font-color-1);
            }

            a:hover, a:focus {
                color: var(--font-color-2);
            }
        `}</style>
    </>);
}

const EducationItem = ({ image, institution, career, period, children }: {
    image: string,
    institution: string,
    career: string,
    period: string,
    children?: React.ReactNode
}) => {
    return (<>
        <section>
            <article>
                <img alt={institution} src={image}/>
            </article>
            <article>
                <h3>{institution}</h3>
                <p>{career}</p>
                <p>{period}</p>
            </article>
            {children}
        </section>
        <style jsx>{`
            section {
                display: flex;
                gap: 10px;
            }

            img {
                width: 80px;
            }

            h3 {
                font-size: 20px;
            }

            h3, p {
                margin: 0;
            }
        `}</style>
    </>);
}

export default Education;