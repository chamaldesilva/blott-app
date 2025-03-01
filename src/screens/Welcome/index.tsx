import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/types';
import {requestNotificationPermission} from '../../utils/permissions';
import {styles} from './styles';
import {useStatusBarHeight} from '../../hooks/useStatusBarHeight';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

export const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const statusBarHeight = useStatusBarHeight();

  const handleContinue = async () => {
    const granted = await requestNotificationPermission();
    console.log('Notification Permission:', granted);
    navigation.replace('NewsFeed');
  };

  return (
    <View style={[styles.container, {paddingTop: statusBarHeight}]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={require('../../assets/images/notification.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Get the most out of Blott ✅</Text>
      <Text style={styles.description}>
        Allow notifications to stay in the loop with your payments, requests and
        groups.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
