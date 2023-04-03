const Contact = () => {
    return (<>
        <div>
            <ContactItem
                url="https://github.com/Rolando1010"
                name="Github"
                image="/github.svg"
            />
            <ContactItem
                url="https://www.linkedin.com/in/rolando-mora-cordero-934a67215/"
                name="Linkedin"
                image="/linkedin.svg"
            />
            <ContactItem
                url="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rmcdesarrollo@gmail.com"
                name="Email"
                image="/email.svg"
            />
        </div>
        <style jsx>{`
            div {
                display: flex;
                gap: 15px;
            }
        `}</style>
    </>);
}

const ContactItem = ({ url, name, image }: {url: string, name: string, image: string}) => {
    return (<>
        <a href={url} title={name} target="_blank">
            <div>
                <img alt={`Contact ${name}`} src={image}/>
            </div>
        </a>
        <style jsx>{`
            div {
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                background-color: var(--background-2);
                border-radius: 100%;
            }

            img {
                width: 30px;
            }

            a:hover div, a:focus div {
                background-color: var(--primary-1);
            }
        `}</style>
    </>);
}

export default Contact;