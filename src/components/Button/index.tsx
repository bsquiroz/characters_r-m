import {TouchableOpacity, StyleSheet} from 'react-native';
import {TextBase} from '../TextBase';
import {useAppContext} from '../../context/useAppContext';

interface Props {
  handleUrl: () => void;
  text: string;
}

export const Button = ({handleUrl, text}: Props) => {
  const {styleApp} = useAppContext();
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{backgroundColor: styleApp.primary100},
      }}
      onPress={handleUrl}>
      <TextBase text={text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
  },
});
