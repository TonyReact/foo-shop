import React from 'react'
import Image, { ImgType } from './Image'
import Button from './Button'

const ArrowRight = () => {
  return (
    <Button
      borderRadius='30px'
      width='57px'
      height='57px'
      border='none'
      backgroundColor='#FFF8F0'
      label={<Image imgType={ImgType.ArrowRight} />}
    />
  )
}

export default ArrowRight