import {useState, useEffect} from 'react';
import {getInfoApi} from '../../services/getCharacters';
import {Characters, ResponseAPIRickAndMorty} from '../../interfaces';
import {useAppContext} from '../../context/useAppContext';

export const useHome = () => {
  const {styleApp} = useAppContext();
  const [urls, setUrls] = useState<{next: string | null; prev: string | null}>({
    next: '',
    prev: '',
  });

  const [characters, setCharacters] = useState<Characters[]>([]);

  const handleLogic = (response: ResponseAPIRickAndMorty | undefined) => {
    if (response) {
      setCharacters(response.results);
      setUrls({
        next: response.info.next,
        prev: response.info.prev,
      });
    }
  };

  useEffect(() => {
    getInfoApi('https://rickandmortyapi.com/api/character').then(response => {
      handleLogic(response);
    });
  }, []);

  const handleUrl = (url: string | null) => {
    url &&
      getInfoApi(url).then(response => {
        handleLogic(response);
      });
  };

  return {
    handleUrl,
    characters,
    urls,
    styleApp,
  };
};
