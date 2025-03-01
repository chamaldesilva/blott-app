import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StatusBar, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/types';
import {styles} from './styles';
import {useStatusBarHeight} from '../../hooks/useStatusBarHeight';
import {COLORS} from '../../constants/theme';
import {saveUserData} from '../../utils/storage';

type UserInfoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UserInfo'
>;

export const UserInfoScreen = () => {
  const navigation = useNavigation<UserInfoScreenNavigationProp>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const statusBarHeight = useStatusBarHeight();

  const isValid = firstName.trim() !== '' && lastName.trim() !== '';

  const handleContinue = async () => {
    await saveUserData({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
    });
    navigation.navigate('Welcome');
  };

  return (
    <View style={[styles.container, {paddingTop: statusBarHeight}]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Text style={styles.text}>Your legal name</Text>
      <Text style={styles.description}>
        We need to know a bit about you so that we can create your account.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor={COLORS.lightGray}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor={COLORS.lightGray}
        value={lastName}
        onChangeText={setLastName}
      />
      <TouchableOpacity
        style={[styles.button, !isValid && styles.buttonDisabled]}
        onPress={handleContinue}
        disabled={!isValid}>
        <Icon name="arrow-forward" size={24} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};
