import {ResponseAPIRickAndMorty, Characters} from '../interfaces';

import {httpClient} from '../plugins/httpClient.plugin';

export const getInfoApi = async (
  url: string,
): Promise<ResponseAPIRickAndMorty | undefined> => {
  try {
    const response = await httpClient.get(url);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Services getInfoApi have a error ${error}`);
    }
  }
};

export const getInfoApiCharacter = async (
  url: string,
): Promise<Characters | undefined> => {
  try {
    const response = await httpClient.get(url);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Services getInfoApi have a error ${error}`);
    }
  }
};
