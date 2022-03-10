import { useEffect, useState, useRef } from 'react';

import image1 from '../gallery/image1.jpg';
import image2 from '../gallery/image2.jpg';
import image3 from '../gallery/image3.jpg';
import image4 from '../gallery/image4.jpg';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const images = [image1, image2, image3, image4];
  const timeout = useRef(null);
  const delay = 3500;

  const reset = () => {
    console.log('cambiando');
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
    <div className="gallery-container">
      <section className="gallery-section">
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
      </section>
    </div>
  );
}
