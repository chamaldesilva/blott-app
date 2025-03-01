import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.background,
  },
  image: {
    width: 98,
    height: 98,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: COLORS.black,
    marginVertical: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.gray,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    height: 50,
    backgroundColor: COLORS.button,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
