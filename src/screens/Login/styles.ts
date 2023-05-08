import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#82B3C9',
    padding:60,
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 84,
    fontFamily: 'Roboto'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    width: '90%',
    lineHeight: 26,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#FFFFFF',
    height: 36,
    width: '100%',
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1C1B1F',
  },
  loginInfo: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    width: '85%',
    color: '#FFFFFF'
  }
});
