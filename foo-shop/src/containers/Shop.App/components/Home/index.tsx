import React, { FC } from 'react'
import TopMenu from './Menu'
import { menuList } from '../../constants'
import Image, { ImgType } from '../../../LocalComponentLibrary/components/Image'
import Search from './Search'
import { Flexbox } from './style'
import MainOrderModule from './MainOrderModule'

const Home: FC = () => {
  return (
    <>
      <Flexbox padding="39px 0">
        <Image
          imgType={ImgType.Logo}
          width="50px"
          height="50px"
          gap="10px"
          description="Foo"
        />
        <TopMenu items={menuList} />
        <Search />
      </Flexbox>
      <Flexbox justifyContent='space-around'>
        <MainOrderModule />
        <Image
          imgType={ImgType.FastFoodMain}
          width="37rem"
          height="32rem"
        />
      </Flexbox>
    </>
  )
}

export default Home;