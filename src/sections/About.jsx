import heart from "../assets/icons/heart.svg";
import teamwork from "../assets/icons/teamwork.svg";
import respect from "../assets/icons/respect.svg";

export default function About() {
    
  return (
    <div className="about-section">
      <div className="scroll" name="about" />
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-header__title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="about-header__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            distinctio alias rerum sunt unde dolor nostrum voluptate nobis
            autem. Voluptatibus voluptates placeat quo asperiores, dicta
            sapiente! Laborum voluptatum reiciendis deleniti.
          </p>
        </div>
        <div className="about-cards">
          <div className="card">
            <div className="card-item">
              <img className="card__image" src={respect} alt="respect" />
              <h3 className="card-item__title">Respeto</h3>
              <p className="card-item__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                necessitatibus et nobis voluptas aspernatur atque, natus dolores
                laudantium laboriosam cupiditate tempore saepe, eligendi ad
                optio, aperiam corporis iusto ipsa rem?
              </p>
            </div>
            <div className="card-item">
            <img className="card__image" src={teamwork} alt="teamwork" />
              <h3 className="card-item__title">Cooperación</h3>
              <p className="card-item__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo magnam atque, debitis blanditiis aspernatur
                voluptates, error repellendus, suscipit optio iusto aliquam vero
                itaque. Similique nisi omnis ipsam minus porro? Laudantium?
              </p>
            </div>
            <div className="card-item">
              <img className="card__image" src={heart} alt="heart" />
              <h3 className="card-item__title">Relación social</h3>
              <p className="card-item__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                quis incidunt, nobis nostrum aliquam officia similique ipsum
                quos quibusdam in iure adipisci sint ea, cupiditate id iusto
                libero non? Asperiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
