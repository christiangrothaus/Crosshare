import { createContext, useContext, StrictMode } from 'react';
import Designer from './pages/Designer';
import Pages from './enums/pages';
import { ThemeProvider } from 'styled-components';
import DarkTheme from './themes/dark.theme';

const PageContext = createContext(Pages.Designer);

const getPageComponent = (page: Pages) => {
  switch (page) {
    case Pages.Designer:
      return Designer;
    default:
      return Designer;
  }
};

const App = () => {
  const currentPage = useContext(PageContext);
  const PageComponent = getPageComponent(currentPage);
  
  return (
    <StrictMode>
      <ThemeProvider theme={DarkTheme}>
        <PageContext.Provider value={Pages.Designer}>
          {<PageComponent />}
        </PageContext.Provider>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;