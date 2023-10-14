import {Container, InfoText, TextBase} from '../../components';
import {PropsScreenCharacter} from '../../interfaces';
import {useCharacter} from './useCharacter';
import {Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

export const Character = ({route, navigation}: PropsScreenCharacter) => {
  const {id} = route.params;
  const {character, styleApp} = useCharacter(id);

  return (
    character && (
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            ...styles.contentNext,
            ...{backgroundColor: styleApp.primary100},
          }}>
          <TextBase customStyles={styles.styleNext} text={'Volver atras'} />
        </TouchableOpacity>
        <Image
          style={{width: '100%', height: 300}}
          source={{uri: character.image}}
        />
        <Container>
          <InfoText title={'Nombre:'} text={character.name} />
          <InfoText
            title={'Numero de episodios:'}
            text={character.episode.length.toString()}
          />
          <InfoText title={'Estado:'} text={character.status} />
          <InfoText title={'Especie:'} text={character.species} />
          <InfoText title={'Genero:'} text={character.gender} />
          <InfoText
            title={'Origen del personaje:'}
            text={character.origin.name}
          />
        </Container>
      </ScrollView>
    )
  );
};

const styles = StyleSheet.create({
  contentNext: {
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleNext: {
    fontWeight: 'bold',
  },
});
