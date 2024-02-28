import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row-reverse;    
  display: flex;
  justify-content: center; 
  background-color: #C62828;  
  padding:   25px ;
  max-height: 120px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;  
    align-items: center;    
  }
   `;

export const LogoContainer = styled.div`
width: 100%;
height: 120px;
display: flex;
justify-content: center;
align-items: center;
background-color: yellow ;

img {
    width: 400px;
    &:nth-child(2) {
        width: 90px;
    }
     @media (max-width: 768px) {
      width: 300px;   
}
}
`;