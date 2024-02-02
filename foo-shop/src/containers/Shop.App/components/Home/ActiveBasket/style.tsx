import styled from 'styled-components';

export const BasketQuantity = styled.span`
  width: 17px;
  height: 17px;
  position: absolute;
  bottom: 20px;
  right: -16px;
  border-radius: 50%;
  background-color: #EC2633;
  box-shadow: 0 2px 23px 1px rgba(255, 51, 52, 0.72);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

export const CartContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;