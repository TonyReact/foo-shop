import React, { useState, ReactNode, CSSProperties, useEffect } from 'react';
import { CustomSearchContainer, CustomSearchInput, CustomDropdown, DropdownItem } from './style';

interface CustomSearchProps {
  data: { label: string; value: string }[];
  onNavigate: (selectedItem: string) => void;
  onSelect: (selectedValue: string) => void;
  dropdownStyles?: CSSProperties;
  renderCustomDropdownItem?: (item: string, index: number) => ReactNode;
  inputWidth?: string;
  inputHeight?: string;
  inputBorder?: string;
  placeholder?: string | ReactNode | undefined;
  maxChars?: number;
  dropdownHeight?: string;
  dropdownItemMaxChars?: number;
}

const CustomSearch: React.FC<CustomSearchProps> = ({
  data,
  onNavigate,
  onSelect,
  dropdownStyles,
  renderCustomDropdownItem,
  inputWidth,
  inputHeight,
  inputBorder,
  placeholder,
  maxChars,
  dropdownHeight,
  dropdownItemMaxChars,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<
    { label: string; value: string }[]
  >([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newSearchTerm = event.target.value;

    if (maxChars && newSearchTerm.length > maxChars) {
      newSearchTerm = newSearchTerm.slice(0, maxChars);
    }

    setSearchTerm(newSearchTerm);

    const filteredResults = data.filter(
      (item) =>
        item.label.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
        item.value.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
    setShowDropdown(!!newSearchTerm && !!filteredResults.length);
  };

  const handleDropdownClick = (result: { label: string; value: string }) => {
    setSearchTerm(result.label);
    setShowDropdown(false);
    onNavigate(result.value);
    onSelect(result.value);
  };

  const handleInputFocus = () => {
    if (searchTerm) {
      setShowDropdown(true);
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-search-container')) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <CustomSearchContainer
      className="custom-search-container"
      inputWidth={inputWidth}
    >
      <CustomSearchInput
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder={typeof placeholder === 'string' ? placeholder : 'Search...'}
        inputHeight={inputHeight}
        inputBorder={inputBorder}
        maxChars={maxChars}
      />
      <CustomDropdown show={showDropdown} style={dropdownStyles} height={dropdownHeight}>
        {searchResults.map((result, index) => (
          <DropdownItem
            key={index}
            onClick={() => handleDropdownClick(result)}
            maxChars={dropdownItemMaxChars}
          >
            {renderCustomDropdownItem ? (
              renderCustomDropdownItem(result.label, index)
            ) : (
              result.label
            )}
          </DropdownItem>
        ))}
      </CustomDropdown>
    </CustomSearchContainer>
  );
};

export default CustomSearch;