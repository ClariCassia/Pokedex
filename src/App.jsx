import styled from 'styled-components';
import { useTheme } from './hooks/useTheme'
import RoutesApp from './routes';
function App() { 

  const { theme } = useTheme();  

  return (
   <ContainerTheme theme={theme}>
    
    <RoutesApp/>

   </ContainerTheme>
  )
     
}

const ContainerTheme = styled.div`
background-color: ${props=> props.theme.background};
color: ${props=> props.theme.color};
min-height: calc(100vh - 190px);
display: flex;
align-items: center;
justify-content: center;
`
export default App