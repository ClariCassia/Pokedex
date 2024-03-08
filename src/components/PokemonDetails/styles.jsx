import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

export const StyledArrowLeft = styled(FaArrowLeft)`
  color: ${props => props.theme.color}; 
  font-size: 30px;   
 `;

export const Container = styled.div`
display: flex;

@media (max-width: 1024px) {
  flex-direction: column;
  padding: 30px;
  align-items:center;
  justify-content: center;

  img {
    width: 350px;     
    padding-bottom: 30px; 
  }
}

@media (max-width: 768px) {
  font-size: 12px;   
  img {
    width: 250px;
  }
}
`;

 export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 550px;
  gap: 20px;
  padding: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: ${props => props.background};

  h2 {
    font-size: 40px;
    color: aliceblue;
    background-color: ${props => props.color};
    padding: 10px;
    width: 100%;
    text-align: center;
    border-radius: 5px;
  }

  span {
    background-color: ${props => props.color};
    padding: 5px 15px;
    color: white;
    text-align: center;
    border-radius: 3px;
    font-size: 18px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }

  p {
    text-align: center;   
      }

  @media (max-width: 768px) {    
    span { 
    font-size: 16px;
  }   
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
`;

export const ProgressBar = styled.div` 
  border-radius: 10px;
  background-color: ${(props) => props.color};
  min-width: 10%;
  width: ${(props) => props.width}%;
  text-align: center;
  color: white;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  padding:  4px 2px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
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

export const Div = styled.div`
  display: flex;
  align-items: center;  
  justify-content: space-between;
`;
