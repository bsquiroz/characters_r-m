import {useEffect, useState} from 'react';
import {getInfoApiCharacter} from '../../services/getCharacters';

import {Characters} from '../../interfaces';
import {useAppContext} from '../../context/useAppContext';

export const useCharacter = (id: number) => {
  const [character, setCharacter] = useState<Characters>();
  const {styleApp} = useAppContext();

  useEffect(() => {
    if (id) {
      getInfoApiCharacter(
        `https://rickandmortyapi.com/api/character/${id}`,
      ).then(response => {
        if (response) {
          setCharacter(response);
        }
      });
    }
  }, []);

  return {
    character,
    styleApp,
  };
};
