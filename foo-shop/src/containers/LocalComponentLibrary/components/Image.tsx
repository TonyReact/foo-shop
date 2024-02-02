import React from 'react';
import { ImageContainer, IImageContainerProps } from './style';
import { Flexbox } from '../../Shop.App/components/Home/style';
import Text from './Text';

export enum ImgType {
  Logo = 'Logo',
  Search = 'Search',
  Cart = 'Cart',
  FastFoodMain = 'FastFoodMain',
  ArrowRight = 'ArrowRight',
}

interface ImageContainerProps extends IImageContainerProps {
  imgType: ImgType;
  description?: string;
  gap?: string;
  cursor?: string;
}

const getImage = (type: ImgType, props: IImageContainerProps, alt="Cannot upload this image") => {
  switch (type) {
    case ImgType.Logo:
      return <ImageContainer src="Logo.svg" alt={alt} {...props} />;
    case ImgType.Search:
      return <ImageContainer src="Search.svg" alt={alt} {...props} />;
    case ImgType.Cart:
      return <ImageContainer src="Cart.svg" alt={alt} {...props} />;
    case ImgType.FastFoodMain:
      return <ImageContainer src="FastFoodMain.svg" alt={alt} {...props} />;
    case ImgType.ArrowRight:
      return <ImageContainer src="ArrowRight.svg" alt={alt} {...props} />;
    default:
      return null;
  }
};

const Image: React.FC<ImageContainerProps> = ({ imgType, cursor, gap, description, ...restProps }) => {
  const currentImage = getImage(imgType, restProps);

  return (
    <Flexbox cursor={cursor || 'pointer'} gap={description ? gap : 'none'}>
      {currentImage}
      {description ? <Text label={description} fontSize='32px' fontWeight='600' /> : null}
    </Flexbox>
  );
};

export default Image;
