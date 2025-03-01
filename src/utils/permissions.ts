import {Platform, PermissionsAndroid} from 'react-native';
import {RESULTS, requestNotifications} from 'react-native-permissions';

export const requestNotificationPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      const result = await requestNotifications(['alert', 'sound']);
      return result.status === RESULTS.GRANTED;
    }

    // For Android 13 (API 33) and above
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      return result === PermissionsAndroid.RESULTS.GRANTED;
    }

    // For older Android versions or other platforms
    return true;
  } catch (error) {
    console.error('Permission request failed:', error);
    return false;
  }
};
