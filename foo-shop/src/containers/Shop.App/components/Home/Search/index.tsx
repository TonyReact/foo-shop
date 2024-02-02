import React from 'react'
import ActiveBasket from '../ActiveBasket';
import CustomSearch from '../../../../LocalComponentLibrary/components/CustomSearch';
import { Flexbox } from '../style';

const Search = () => {
  return (
    <Flexbox style={{width: '314px', height: '60px', borderRadius: '30px', backgroundColor: 'rgba(255, 249, 240, 0.5'}} justifyContent="center" gap="10px">
      <CustomSearch
        data={[{ label: 'мяу 1', value: 'item1' }, { label: 'зая уцауцауцауцауцацуауцауцауцацуауцауцауцацу2', value: 'item2' }]}
        onNavigate={() => { } }
        inputWidth="195px"
        inputHeight="30px"
        placeholder="Type to search"
        maxChars={25}
        dropdownHeight="100px"
        onSelect={()=>{}}
        inputBorder={'none'}
      />
      <span>|</span>
      <ActiveBasket quantity={0} />
    </Flexbox>
  )
}

export default Search;