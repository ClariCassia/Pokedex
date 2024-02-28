import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row-reverse;    
  display: flex;
  justify-content: center; 
  background-color: #C62828; 
  max-height: 190px;
  padding: 35px;
 

  @media (max-width: 768px) {
    flex-direction: column-reverse;  
    align-items: center;    
    gap: 20px
  }
   `;

export const LogoContainer = styled.div`
width: 100%;
height: 120px;
display: flex;
justify-content: center;
align-items: center;
padding: 50px;




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