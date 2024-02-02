import styled from 'styled-components';

export interface ITextContainerProps {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  wordWrap?: string;
  width?: string;
  height?: string;
  lineHeight?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  cursor?: string;
}

export interface IImageContainerProps {
  width?: string;
  height?: string;
}

export const TextContainer = styled.span<ITextContainerProps>`
  color: ${(props) => props.color || 'inherit'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  word-wrap: ${(props) => props.wordWrap || 'normal'};
  width: ${(props) => props.width || 'auto'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  cursor: ${(props) => props.cursor || 'normal'};
`;

export const ButtonContainer = styled.button<ITextContainerProps>`
  color: ${(props) => props.color || 'inherit'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  word-wrap: ${(props) => props.wordWrap || 'normal'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  background-color: ${(props) => props.backgroundColor || 'inherit'};
  border-radius: ${(props) => props.borderRadius || 'none'};
  border: ${(props) => props.border || 'none'};
  cursor: ${(props) => props.cursor || 'normal'};
`;

export const ImageContainer = styled.img<IImageContainerProps>`
  width: ${(props) => props.width || '25px'};
  height: ${(props) => props.height || '25px'};
`;

export const CustomSearchContainer = styled.div<{ inputWidth?: string }>`
  position: relative;
  width: ${(props) => props.inputWidth || '200px'};
`;

export const CustomSearchInput = styled.input<{ inputHeight?: string; inputBorder?: string; maxChars?: number }>`
  width: 100%;
  box-sizing: border-box;
  height: ${(props) => props.inputHeight || 'auto'};
  max-width: 100%;
  max-height: 100%;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  border: ${(props) => props.inputBorder || 'auto'};
  background-color: inherit;
`;

export const CustomDropdown = styled.ul<{ show: boolean; height?: string }>`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  max-height: ${(props) => props.height || 'auto'};
  overflow-y: auto;
  border-radius: 5px;
`;

export const DropdownItem = styled.li<{ maxChars?: number }>`
  cursor: pointer;
  padding: 8px;
  transition: background-color 0.3s;
  background-color: rgba(255, 249, 240, 0.5);
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  min-height: 20px;

  &:hover {
    background-color: rgba(255, 249, 240, 0.8);
  }
`;