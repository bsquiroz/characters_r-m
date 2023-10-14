import {createContext, useState, useEffect} from 'react';
import {Appearance} from 'react-native';
import {Propschildren, ThemeApp} from '../interfaces';
import {themeDark, themeLight} from '../globalStyles';

interface IContext {
  styleApp: ThemeApp;
}

export const AppContext = createContext({} as IContext);

export const AppProvider = ({children}: Propschildren) => {
  const [styleApp, setStyleApp] = useState<ThemeApp>(themeDark);

  useEffect(() => {
    const subs = Appearance.addChangeListener(({colorScheme}) => {
      colorScheme === 'dark' ? setStyleApp(themeDark) : setStyleApp(themeLight);
    });

    return () => subs.remove();
  }, []);

  const store = {
    styleApp,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
