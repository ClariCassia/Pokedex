import React from 'react';

import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

export const StyledArrowLeft = styled(FaArrowLeft)`
  color: ${props => props.theme.color}; 
  font-size: 30px;   
 `;

export const BackButton = styled.button`
display: flex;
background-color: transparent;
cursor: pointer;
transition: background-color 0.3s;
&:hover {
  opacity: 0.5;
}
`;

export const ButtoArrow = ({ theme, navegation }) => (
  <BackButton onClick={() => navegation(-1)}>
    <StyledArrowLeft theme={theme} />
  </BackButton>
);


export default BackButton;
