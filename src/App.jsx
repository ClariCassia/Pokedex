import styled from "styled-components";
import { useTheme } from "./hooks/useTheme"

function App() { 

  const { theme } = useTheme();  

  return <ContainerTheme theme = {theme}/> 
     
}

const ContainerTheme = styled.div`
background-color: ${props=> props.theme.background};
min-height: calc(100vh - 190px);

`
export default App