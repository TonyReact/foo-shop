import React, { ReactNode } from 'react'
import { ITextContainerProps, ButtonContainer } from './style';

interface IProps extends ITextContainerProps {
  label: string | ReactNode | undefined;
}

const Button: React.FC<IProps> = ({ label, fontWeight, border, cursor, fontSize, borderRadius, color, backgroundColor, wordWrap, width, height, lineHeight}) => {
  return (
    <ButtonContainer
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={color}
      wordWrap={wordWrap}
      width={width}
      height={height}
      lineHeight={lineHeight}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
      cursor={cursor}
    >
      {label}
    </ButtonContainer>
  )
}

export default Button;