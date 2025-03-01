import {StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: SPACING.sm,
    marginHorizontal: SPACING.sm,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  content: {
    flex: 1,
    marginLeft: SPACING.sm,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  source: {
    fontSize: 12,
    color: COLORS.white,
    opacity: 0.7,
  },
  date: {
    fontSize: 12,
    color: COLORS.white,
    opacity: 0.7,
  },
});
