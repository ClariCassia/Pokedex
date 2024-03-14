import styled from 'styled-components';

export const CustomSelect = styled.div`
  position: relative;
  display: flex; 
  gap: 10px;
  padding: 10px 1px;    

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

export const SelectLabel = styled.label`  
  font-weight: bold;
  color: rgb(0, 74, 148);
  color: ${props => props.theme.color === "#212121" ? 'rgb(0, 74, 148)' : props.theme.color};
  padding-top: 5px;
`;

export const SelectSelected = styled.div`
 background: ${props => props.theme.background === "#212121" ? 'rgb(53, 50, 50)' : props.theme.background};
  border: 1px solid rgba(0, 74, 148, 0.312);
  padding: 5px 10px;
  cursor: pointer;
  width: 160px;
  text-align: center;
  font-size: 14px;
  border-radius: 3px;
`;

export const SelectItems = styled.div`
  position: absolute;
  margin-left: 100%;  
  background: ${props => props.theme.background === "#212121" ? 'rgb(53, 50, 50)' : props.theme.background};
  border: 1px solid rgba(0, 74, 148, 0.312);
  border-radius: 3px;
  display: ${({ show }) => (show === 'true' ? 'block' : 'none')};  
  
  @media (max-width: 1024px) {
    margin-top:10%;
    margin-left: 20%; 
  }

  @media (max-width: 570px) {  
    margin-left: 0%; 
  }  
  div {
    min-width: 300px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;   
    padding: 8px;
  }  
`;

export const Option = styled.p`
  padding: 8px 10px;
  width: 50%;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 74, 148, 0.312);
  }

  &:first-of-type {
    font-weight: bold;
    width: 100%;
    color: ${props => props.theme.color === '#212121' ? 'rgb(0, 74, 148)' : props.theme.color};
    margin: 0; 
   }

  img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }

`;
