import { Link } from 'react-scroll';

import Navbar from "./sections/Navbar";

import Home from "./sections/Home";
import About from './sections/About';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <div className="body">
                <Home />
                <About />
            </div>
        </div>
    )
}

export default App
