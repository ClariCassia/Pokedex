import styled from 'styled-components';

export const StyledArrowLeft = styled(FaArrowLeft)`
  color: ${props => props.theme.color}; 
  font-size: 30px;   
 `;

export const BackButton = styled.button`
display: flex;
cursor: pointer;
transition: background-color 0.3s;

&:hover {
  opacity: 0.5;
}
`;