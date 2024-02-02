import React from 'react'
import { ITextContainerProps, TextContainer } from './style';

interface IProps extends ITextContainerProps {
  label: string;
}

const Text: React.FC<IProps> = ({ label, cursor, fontWeight, fontSize, color, wordWrap, width, lineHeight}) => {
  return (
    <TextContainer
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={color}
      wordWrap={wordWrap}
      width={width}
      lineHeight={lineHeight}
      cursor={cursor}
    >
      {label}
    </TextContainer>
  )
}

export default Text;