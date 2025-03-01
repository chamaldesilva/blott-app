import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

export const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  fName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  listContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.black,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
});
