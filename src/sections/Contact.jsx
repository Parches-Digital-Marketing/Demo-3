export default function Contact() {
  return (
    <div className="contact-section">
      <div className="scroll" name="contact" />
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1191.0105134531962!2d-6.262022124663893!3d53.34287979614016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9b76719607%3A0x9d13471d963893a7!2s1%20Grafton%20Street%2C%20Dublin%2C%20Irlanda!5e0!3m2!1ses-419!2sar!4v1648424324558!5m2!1ses-419!2sar"
          className="map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <form className="contact-form-container">
            <div className="contact-form-header">
              <h2 className="contact-form-header__title">Contactanos</h2>
            </div>
            <div className="contact-form-item">
              <label className="contact-form-item__label" htmlFor="name">
                Nombre
              </label>
              <input
                className="contact-form-item__input"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="contact-form-item">
              <label className="contact-form-item__label" htmlFor="email">
                Correo electronico
              </label>
              <input
                className="contact-form-item__input"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="contact-form-item">
              <label className="contact-form-item__label" htmlFor="message">
                Mensaje
              </label>
              <textarea
              className="contact-form-item__input contact-form-item__textarea"
                name="message"
                id="message"
                cols="50"
                rows="20"
              />
            </div>
            <div className="contact-form-item">
              <input className="contact-form-btn" type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
