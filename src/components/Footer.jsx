export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-about">
          <h2 className="footer-about__title">Gimnasio Toku</h2>
          <p className="footer-about__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
            possimus! Amet, modi. Harum, voluptatibus expedita.
          </p>
        </div>
        <div className="footer-followus">
          <h2 className="footer-followus_title">Nuestras redes</h2>
          <ul className="footer-list">
            <li className="footer-list__item">
              <a href="#" className="footer-list__link">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__link">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__link">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p className="footer-copyright__text">
            Copyright © 2022 <span className="secondary">Parches Desarrollo Web</span>
          </p>
          <p className="footer-copyright__text">
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
