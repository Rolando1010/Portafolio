import Navbar from "./navbar";
import Presentation from "./presentation";
import Experience from "./experience";
import Education from "./education";
import Projects from "./projects";
import Knowledge from "./knowledge";
import Footer from "./footer";

const Home = () => {
    return (<>
        <Navbar/>
        <main>
            <Presentation/>
            <Experience/>
            <Education/>
            <Projects/>
            <Knowledge/>
        </main>
        <Footer/>
        <style jsx>{`
            main {
                max-width: 1000px;
                padding: 0 25px;
                margin: auto;
            }
        `}</style>
    </>);
}

export default Home;