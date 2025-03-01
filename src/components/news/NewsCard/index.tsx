import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import {NewsItem} from '../../../types/news';
import {styles} from './styles';
import {formatDate} from '../../../utils/date';

interface NewsCardProps {
  item: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({item}) => {
  const handlePress = () => {
    Linking.openURL(item.url);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{uri: item.image}} style={styles.thumbnail} />
      <View style={styles.content}>
        <View style={styles.meta}>
          <Text style={styles.source}>{item.source?.toUpperCase()}</Text>
          <Text style={styles.date}>{formatDate(item.dateTime)}</Text>
        </View>
        <Text style={styles.title} numberOfLines={3}>
          {item.headline}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
