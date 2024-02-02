import styled from 'styled-components';

interface FlexboxProps {
  justifyContent?: string;
  gap?: string;
  flexDirection?: string;
  padding?: string;
  cursor?: string;
  alignItems?: string;
  width?: string;
}

export const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'space-around'};
  gap: ${(props) => props.gap || '0px'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  padding: ${(props) => props.padding || '0px'};
  cursor: ${(props) => props.cursor || 'initial'};
  align-items: ${(props) => props.alignItems || 'center'};
  width: ${(props) => props.width || 'auto'};
`;