import {View, StyleSheet} from 'react-native';
import {TextBase} from '../TextBase';

interface Props {
  title: string;
  text: string | number;
}

export const InfoText = ({text, title}: Props) => {
  return (
    <View style={styles.content}>
      <TextBase customStyles={styles.styleTitle} text={title} />
      <TextBase text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 5,
  },
  styleTitle: {
    fontWeight: 'bold',
  },
});
