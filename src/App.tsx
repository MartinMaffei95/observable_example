import { SnackbarProvider } from 'notistack';
import ProviderComponent from './redux/Provider/ProviderComponent';
import { GlobalStyle, StyledTitle } from './styled-components';
import GetCharacter from './Components/GetCharacter';

function App() {
  return (
    <ProviderComponent>
      <GlobalStyle />
      <SnackbarProvider />
      <StyledTitle>
        <h1>R&M Random</h1>
      </StyledTitle>
      <GetCharacter />
    </ProviderComponent>
  );
}

export default App;
