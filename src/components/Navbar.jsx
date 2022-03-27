import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <section className="navbar-section">
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="navbar-list">
                	<Link activeClass="active" className="navbar-list__link" to="about" spy={true} isDynamic={true} smooth={true} duration={500}>
                    	<li className="navbar-list__item">Nosotros</li>
                    </Link>
                    <Link activeClass="active" className="navbar-list__link" to="membership" spy={true} isDynamic={true} smooth={true} duration={500}>
                        <li className="navbar-list__item">Membresia</li>
                    </Link>
                    <Link activeClass="active" className="navbar-list__link" to="services" spy={true} isDynamic={true} smooth={true} duration={500}>
                        <li className="navbar-list__item">Contacto</li>
                    </Link>
            	</ul>
            </nav>
        </div>
    </section>
  )
}
