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
  padding-top: 5px;
`;

export const SelectSelected = styled.div`
  background-color: #efffff;
  border: 1px solid rgba(0, 74, 148, 0.312);
  padding: 5px 10px;
  cursor: pointer;
  width: 160px;
  text-align:center;
  font-size: 14px;
  border-radius: 3px;

`;

export const SelectItems = styled.div`
  position: absolute;
  margin-left: 100%; /* Posiciona à direita do CustomSelect */
  background-color: #efffff;
  border: 1px solid #ccc; 
  border-radius: 3px;
  
  
  div{    
    min-width: 300px;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
  }  
`;

export const Option = styled.p`
  padding: 8px 10px;
  width: 50%;
  text-align:center;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }

  &:first-of-type {
     
        font-weight: bold;
        width: 100%;
        color: rgb(0, 74, 148);
        
    }
`;
