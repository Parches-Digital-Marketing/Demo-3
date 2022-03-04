import { Link } from 'react-scroll'

export default function Navbar() {
    
    return (
        <section className="navbar-container">
            <div className="content">
                <nav className="navbar">
                    <ul className="list">
                        <Link activeClass="active" className="list__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}>
                            <li className="list__item">Inicio</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </section>
    )
}
