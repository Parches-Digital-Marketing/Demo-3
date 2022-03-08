import { useEffect } from 'react';

export const useCarousel = (setIndex, index, images) => {
  useEffect(() => {}, [index]);

  const MoveCarousel = async (value) => {
    console.log(images.length, index);
    if (index >= images.length - 1) {
      setIndex(-1);
    }
    setIndex((i) => i + value);
  };
  return [MoveCarousel];
};
