import { useState, useRef, useEffect } from "react";
import image1 from "../assets/gallery/image1.jpg";
import image2 from "../assets/gallery/image2.jpg";
import image3 from "../assets/gallery/image3.jpg";

export default function Intro() {
  const [index, setIndex] = useState(0);
  const images = [image1, image2, image3];
  const timeout = useRef(null);
  const delay = 3500;

  const reset = () => {
    if (timeout.current) clearTimeout(timeout.current);
  };

  useEffect(() => {
    reset();

    timeout.current = setTimeout(() => {
      setIndex((previousIndex) =>
        previousIndex === images.length - 1 ? 0 : previousIndex + 1
      );
    }, delay);

    return () => {
      reset();
    };
  }, [index]);

  return (
    <div className="intro-section">
      <div className="scroll" name="intro" />
      <div className="intro-container">
        <div className="intro-left">
          <h1 className="intro__title">Si fuera fácil todos serían buenos</h1>
          <p className="intro__text">
            Empieza a construir tu cuerpo deseado a partir de ahora
          </p>
          <button className="intro__button">Conocer más</button>
        </div>
      </div>
      <div className="intro-gallery">
        <ul
          className="gallery"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((element, i) => {
            return (
              <li className="gallery__item">
                <img key={i} className="gallery__image" src={element} alt={i} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
