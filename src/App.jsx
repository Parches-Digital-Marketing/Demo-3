import { Link } from 'react-scroll';
import Navbar from "./sections/Navbar";
import Home from "./sections/Home";

function App() {
    return (
        <div className="app-container">
            <div className="dark"></div>
            <Navbar />
            <Link activeClass="active" className="list__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}><button className="scroll-top"><i className="fas fa-arrow-up"></i></button></Link>
            <div className="body">
                <Home />
            </div>
        </div>
    )
}

export default App
