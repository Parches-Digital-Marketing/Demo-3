import Gallery from '../components/Gallery';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div className="home-container">
      <div className="scroll" name="home" />
      <div className="home">
        <div className="welcome">
          <div className="card-section">
            <div className="card">
              <h2 className="card__title">GIMNASIO TACHANKIS</h2>
              <h3 className="card__subtitle">Obten el cuerpo que mas deseas</h3>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, non? Ratione consequuntur placeat delectus quasi?
                Velit sint ullam, reiciendis eaque ratione itaque beatae nisi
                quos, laborum placeat et pariatur! A.
              </p>
              <div className="card__buttons">
                <button className="card__button">Obtener precios</button>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default Home;
