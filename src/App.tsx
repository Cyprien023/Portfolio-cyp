import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

const App: React.FC = () => {
    return (
        <>
            <Navbar/>

            <div className="flex-1 p-20 ml-16">
                <Header/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>

                <SideBar/>
        </>
    );
};

export default App;
