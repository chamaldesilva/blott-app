import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../screens/Splash';
import {RootStackParamList} from './types';
import {StatusBar} from 'react-native';
import {UserInfoScreen} from '../screens/UserInfo';
import {WelcomeScreen} from '../screens/Welcome';
import {COLORS} from '../constants/theme';
import {NewsFeedScreen} from '../screens/NewsFeed';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="UserInfo" component={UserInfoScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="NewsFeed"
          component={NewsFeedScreen}
          options={{
            cardStyle: {
              backgroundColor: COLORS.black,
            },
          }}
        />
      </Stack.Navigator>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </NavigationContainer>
  );
};
