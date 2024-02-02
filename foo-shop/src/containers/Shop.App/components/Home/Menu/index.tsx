import React from 'react';
import { MenuContainer } from './style';
import Text from '../../../../LocalComponentLibrary/components/Text'

interface TopMenuProps {
  items: string[];
}

const TopMenu: React.FC<TopMenuProps> = ({ items }) => {
  return (
    <>
      <MenuContainer>
        {items.map((item, index) => (
          <li key={index}>
            <Text
              label={item}
              fontSize='22px'
              fontWeight='500'
            />
          </li>
        ))}
      </MenuContainer>
    </>
  );
}

export default TopMenu;
