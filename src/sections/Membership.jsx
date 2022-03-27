export default function Membership() {
  return (
    <div className="membership-section">
      <div className="scroll" name="membership" />
      <div className="membership-container">
        <div className="membership-header">
          <h2 className="membership-header__title">Te ofrecemos</h2>
          <p className="membership-header__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            distinctio alias rerum sunt unde dolor nostrum voluptate nobis
            autem. Voluptatibus voluptates placeat quo asperiores, dicta
            sapiente! Laborum voluptatum reiciendis deleniti.
          </p>
        </div>
        <div className="membership-cards">
          <div className="membership-card">
            <h3 className="membership-card__price">270$</h3>
            <h4 className="membership-card__title">Diario</h4>
            <p className="membership-card__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="membership-card">
            <h3 className="membership-card__price">2,500$</h3>
            <h4 className="membership-card__title">Mensual</h4>
            <p className="membership-card__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="membership-card">
            <h3 className="membership-card__price">16,000$</h3>
            <h4 className="membership-card__title">Anual</h4>
            <p className="membership-card__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
