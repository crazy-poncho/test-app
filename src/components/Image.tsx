import { FC, useEffect, useRef, useState } from 'react';

type ImageProps = {
  src: string;
  alt?: string;
};

export const Image: FC<ImageProps> = props => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return <img data-testid='drinkImg' ref={imgRef} src={isVisible ? props.src : undefined} alt={props.alt ?? ''} />;
};
