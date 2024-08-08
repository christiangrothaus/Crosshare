import { createContext, StrictMode, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Loading from './components/Loading';
import Pages from './enums/pages.enum';
import CrosshairModel from './models/crosshair.model';
import PreferencesModel from './models/preferences.model';
import Designer from './pages/Designer';
import DarkTheme from './themes/dark.theme';
import { buildCrosshairFileName } from './utils/file-names.util';

const PageContext = createContext(Pages.Designer);

const CurrentCrosshairContext = createContext<CrosshairModel |  undefined>(undefined);

const PreferencesContext = createContext<PreferencesModel | undefined>(undefined);

const getPageComponent = (page: Pages) => {
  switch (page) {
    case Pages.Designer:
      return Designer;
    default:
      return Designer;
  }
};

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);
  const [currentCrosshair, setCurrentCrosshair] = useState<CrosshairModel | undefined>(undefined);
  const [preferences, setPreferences] = useState<PreferencesModel | undefined>(undefined);
  const [allCrosshairs, setAllCrosshairs] = useState<Array<CrosshairModel>>([]);
  const currentPage = useContext(PageContext);
  const PageComponent = getPageComponent(currentPage);

  useEffect(() => {
    const loadPreferences = async () => {
      const preferences = await window.api.loadPreferences();
      setPreferences(preferences);
    };

    const loadAllCrosshairs = async () => {
      const crosshairs = await window.api.loadAllCrosshairs();
      setAllCrosshairs(crosshairs);
    };

    const initialLoad = async () => {
      setIsAppLoading(true);
      await loadPreferences();
      await loadAllCrosshairs();

      const currentCrosshair = allCrosshairs.find((crosshair) => buildCrosshairFileName(crosshair) === preferences.currentCrosshairFileName);
      if(currentCrosshair) {
        setCurrentCrosshair(currentCrosshair);
      }

      setIsAppLoading(false);
    };

    initialLoad();
  }, []);
  
  return (
    <StrictMode>
      <PreferencesContext.Provider value={preferences}>
        <ThemeProvider theme={DarkTheme}>
          <CurrentCrosshairContext.Provider value={currentCrosshair}>
            <PageContext.Provider value={Pages.Designer}>
              <Loading isLoading={isAppLoading}>
                {<PageComponent />}
              </Loading>
            </PageContext.Provider>
          </CurrentCrosshairContext.Provider>
        </ThemeProvider>
      </PreferencesContext.Provider>
    </StrictMode>
  );
};

export default App;