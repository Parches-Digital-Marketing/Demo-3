import { Link } from 'react-scroll'
import homeImage from '../images/homeImage.jpg'

function Home() {
    return (
        <div className="home-container">
            <div className="scroll" name="home"></div>
            <div className="home">
                <div className="welcome">
                    <div className="message-section">
                        <div className="message">
                            <h2 className="home__text"><span className="home__text--color">Obten el cuerpo </span>que tanto deseas<span className="home__text--background-color">en gimnasio tachancka</span></h2>
                            <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, non? Ratione consequuntur placeat delectus quasi? Velit sint ullam, reiciendis eaque ratione itaque beatae nisi quos, laborum placeat et pariatur! A.</p>
                            <Link activeClass="active" className="home__link" to="plans" spy={true} smooth={true} duration={500}><button className="home__button">Conocer precios</button></Link>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img className="home__image" src={homeImage} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Home