import {useHome} from './useHome';
import {PropsScreenHome} from '../../interfaces';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Button, Container} from '../../components';
import {TextBase} from '../../components/TextBase';

export const Home = ({navigation}: PropsScreenHome) => {
  const {characters, handleUrl, urls, styleApp} = useHome();

  return (
    <Container>
      <View style={styles.contentButtons}>
        {urls.prev && (
          <Button handleUrl={() => handleUrl(urls.prev)} text="Atras" />
        )}

        {urls.next && (
          <Button handleUrl={() => handleUrl(urls.next)} text="Adelante" />
        )}
      </View>

      <ScrollView>
        {characters &&
          characters.map(character => (
            <TouchableOpacity
              style={{
                ...styles.character,
                ...{backgroundColor: styleApp.primary200},
              }}
              key={character.id}
              onPress={() =>
                navigation.navigate('Character', {
                  id: character.id,
                })
              }>
              <Image style={styles.image} source={{uri: character.image}} />
              <TextBase text={character.name} />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  character: {
    backgroundColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    borderRadius: 16,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 999,
    overflow: 'hidden',
  },
});
