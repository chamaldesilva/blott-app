import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, StatusBar, Text} from 'react-native';
import {NewsCard} from '../../components/news/NewsCard';
import {useNews} from '../../hooks/useNews';
import {styles} from './styles';
import {COLORS} from '../../constants/theme';
import {ErrorView} from '../../components/common/ErrorView';
import {useStatusBarHeight} from '../../hooks/useStatusBarHeight';
import {getUserData} from '../../utils/storage';

export const NewsFeedScreen = () => {
  const {news, loading, error, refetch} = useNews();
  const statusBarHeight = useStatusBarHeight();
  const [firstName, setFirstName] = useState<string>('');

  useEffect(() => {
    const loadUserData = async () => {
      const userData = await getUserData();
      if (userData) {
        setFirstName(userData.firstName);
      }
    };
    loadUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.errorContainer, {paddingTop: statusBarHeight}]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Text style={styles.fName}>Hey, {firstName}</Text>
        <ErrorView
          message="Something went wrong. Please try again later."
          onRetry={refetch}
        />
      </View>
    );
  }

  return (
    <View style={{paddingTop: statusBarHeight}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Text style={styles.fName}>Hey, {firstName}</Text>
      <FlatList
        data={news}
        renderItem={({item}) => <NewsCard item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        refreshing={loading}
        onRefresh={refetch}
      />
    </View>
  );
};
