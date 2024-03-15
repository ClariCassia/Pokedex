import styled from "styled-components";


export const ImageSimbol = styled.img`
 width:20px;
`;
export const EvolutionLine = styled.ul`
  font-size: ${props => props.fontSize};

 div{

  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
 }
`;
export const Div = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  width: 100%;
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
`;

export const StyledMove = styled.div`
  border: 1px solid  ${(props) => props.color};
  border-radius: 2px 5px;
  padding: 4px 5px;
  margin: 5px;  
  display: inline-block; 
  font-size: 12px;
`;
