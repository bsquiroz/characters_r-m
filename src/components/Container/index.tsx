import {StyleSheet, SafeAreaView} from 'react-native';
import {Propschildren} from '../../interfaces';

export const Container = ({children}: Propschildren) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
