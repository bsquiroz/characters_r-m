import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';

export interface PropsScreenHome
  extends StackScreenProps<RootStackParams, 'Home'> {}
export interface PropsScreenCharacter
  extends StackScreenProps<RootStackParams, 'Character'> {}

export type ThemeApp = {
  primary100: string;
  primary200: string;
  primary300: string;
  accent100: string;
  accent200: string;
  text100: string;
  text200: string;
  bg100: string;
  bg200: string;
  bg300: string;
};

export interface Propschildren {
  children: JSX.Element[] | JSX.Element;
}

export interface ResponseAPIRickAndMorty {
  info: Info;
  results: Characters[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Characters {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}
