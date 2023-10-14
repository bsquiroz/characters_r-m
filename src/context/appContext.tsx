import {createContext, useState} from 'react';
import {Propschildren, ThemeApp} from '../interfaces';
import {themeDark, themeLight} from '../globalStyles';

interface IContext {
  styleApp: ThemeApp;
}

export const AppContext = createContext({} as IContext);

export const AppProvider = ({children}: Propschildren) => {
  const [styleApp] = useState<ThemeApp>(themeDark);

  const store = {
    styleApp,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
