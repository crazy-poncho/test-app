import { FC } from 'react';

type ImageProps = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

export const Image: FC<ImageProps> = props => {
  return <img data-testid='drinkImg' src={props.src} width='100%' height='100%' loading='lazy' alt={props.alt ?? ''} />;
};
