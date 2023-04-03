const Title = ({ id, children }: {id: string, children: React.ReactNode}) => {
    return (<>
        <h2 id={id}>{children}</h2>
        <style jsx>{`
            h2 {
                margin: 45px 0 15px 0;
                border-left: 7px solid var(--primary-1);
                padding-left: 10px;
            }
        `}</style>
    </>);
}

const NameTitle = () => {
    return (<>
        <div>
            <img alt="code portfolio" src="/code.svg"/>
            <h1>Rolando</h1>
        </div>
        <style jsx>{`
            div {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            img {
                width: 40px;
            }

            h1 {
                margin: 0;
                font-size: 20px;
            }
        `}</style>
    </>);
}

export {
    NameTitle
}

export default Title;