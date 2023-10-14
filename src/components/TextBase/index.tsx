import {Text, StyleSheet} from 'react-native';
import {useAppContext} from '../../context/useAppContext';

interface Props {
  text: string | number;
  customStyles?: any;
}

export const TextBase = ({text, customStyles}: Props) => {
  const {styleApp} = useAppContext();
  return (
    <Text
      style={{
        ...styles.textBase,
        ...customStyles,
        ...{color: styleApp.text100},
      }}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  textBase: {
    fontSize: 20,
  },
});
