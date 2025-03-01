import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the user data interface
export interface UserData {
  firstName: string;
  lastName: string;
}

// Define storage keys
const STORAGE_KEYS = {
  USER_DATA: '@user_data',
} as const;

// Function to save user data
export const saveUserData = async (userData: UserData): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(userData);
    await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, jsonValue);
  } catch (error) {
    console.error('Error saving user data:', error);
    throw new Error('Failed to save user data');
  }
};

// Function to get user data
export const getUserData = async (): Promise<UserData | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};

// Function to clear user data
export const clearUserData = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.USER_DATA);
  } catch (error) {
    console.error('Error clearing user data:', error);
    throw new Error('Failed to clear user data');
  }
};
