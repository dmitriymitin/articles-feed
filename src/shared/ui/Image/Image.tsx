import React from 'react';

export interface ImageProps extends Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'onError'> {}

export const Image = (props: ImageProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      {...props}
      onError={(e) => {
        e.currentTarget.src = "/placeholderImage.jpeg";
      }}
    />
  );
};
