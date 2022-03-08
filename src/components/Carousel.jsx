import { useState } from "react";
import { useCarousel } from "../hooks/useCarousel";

import image1 from "../gallery/image1.jpg";
import image2 from "../gallery/image2.jpg";
import image3 from "../gallery/image3.jpg";
import image4 from "../gallery/image4.jpg";
import image5 from "../gallery/image5.jpg";

export default function Carousel() {
  const images = [image1, image2, image3, image4, image5];

  const [index, setIndex] = useState(0);
  const [MoveCarousel] = useCarousel(setIndex, images);

  return (
    <div className="carousel-container">
      <section className="carousel-section">
        <ul className="carousel">
          {images.map((element, i) => {
            return (
              <li
                className={
                  i == index
                    ? "carousel__item selected"
                    : "carousel__item unselected"
                }
              >
                <img
                  key={i}
                  className="carousel__image"
                  src={element}
                  alt={i}
                />
                <div className="carousel-buttons">
                  <button className="carousel-btn">izq</button>
                  <button className="carousel-btn">der</button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
