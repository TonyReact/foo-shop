import React from 'react'
import { Flexbox } from '../style';
import Text from '../../../../LocalComponentLibrary/components/Text';
import Button from '../../../../LocalComponentLibrary/components/Button';
import ArrowRight from '../../../../LocalComponentLibrary/components/ArrowRight';

const MainOrderModule = () => {
  return (
    <Flexbox flexDirection='column' gap='1rem'>

      <Flexbox flexDirection='column' alignItems='normal'>
        <Flexbox justifyContent='flex-start' gap='17px'>
          <Text label={'Fast'} color='#FF7E00' fontWeight='700' fontSize='125px' />
          <Text label={'Food Delivery'} width='min-content' fontWeight='700' fontSize='52px' lineHeight='50px' />
        </Flexbox>
        <Text
          label={'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium'}
          width='35rem'
          color='#909090'
          fontSize='22px'
          lineHeight='30px'
        />
      </Flexbox>

      <Flexbox gap='2rem' justifyContent='flex-start' width='100%'>
        <Button
          label={'Order Now'}
          width='188px'
          height='70px'
          borderRadius='30px'
          color='#F4ECE1'
          backgroundColor='#2F2F2F'
          cursor='pointer'
        />
        <Flexbox gap='10px'>
          <ArrowRight />
          <Text label={'Watch video'} fontWeight='600' fontSize='20px' cursor='pointer' />
        </Flexbox>
      </Flexbox>

      <Flexbox flexDirection='column'>
        <Flexbox>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </Flexbox>
        <span></span>
        <span></span>
      </Flexbox>

    </Flexbox>
  )
}

export default MainOrderModule;