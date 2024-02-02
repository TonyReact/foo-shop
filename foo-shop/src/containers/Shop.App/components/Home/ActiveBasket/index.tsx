import React, { FC } from 'react'
import Image, { ImgType } from '../../../../LocalComponentLibrary/components/Image';
import { BasketQuantity, CartContainer } from './style';

interface Iprops {
  quantity: number;
}

const ActiveBasket:FC<Iprops> = ({ quantity }) => {
  return (
    <CartContainer>
      <BasketQuantity>{quantity}</BasketQuantity>
      <Image imgType={ImgType.Cart} />
    </CartContainer>
  )
}

export default ActiveBasket;