import {Platform, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStatusBarHeight = () => {
  const insets = useSafeAreaInsets();
  return Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight || 0;
};
