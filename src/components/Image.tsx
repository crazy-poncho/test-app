import { FC } from 'react';

type ImageProps = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

export const Image: FC<ImageProps> = props => {
  return <img src={props.src} width='100%' height='100%' loading='lazy' alt={props.alt ?? ''} />;
};
