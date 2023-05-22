import {Dimensions, StyleSheet} from 'react-native';
import {red50} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

const  viewHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    padding: 32,
    width: '100%',
    height: '92%',
  },
  formBlock: {
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    flex: 1,
  },
  info: {
    color: '#1C1B1F',
    marginTop: 16,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 20,
    width: 210,
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: '400',
  },
  input: {
    marginTop: 16,
    width: '100%'
  },
  confirm: {
    alignSelf: 'flex-end',
    backgroundColor: '#82B3C9'
  }
});
