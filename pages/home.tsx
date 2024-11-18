import { View, FlatList, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Card from '@components/card';
import SearchBar from '@components/searchBar';
import { useEffect, useState } from 'react';
import { formatDate, FormattedDate } from '@utils/helpers';

export default function Home() {
  const [date, setDate] = useState<FormattedDate>(formatDate(new Date()));
  //mock data
  const users = ['1'];

  useEffect(() => {
    const currentDate = () => {
      setDate(formatDate(new Date()));
    };
    const dateInterval = setInterval(currentDate, 1000);
    return () => clearInterval(dateInterval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date.day}</Text>
      <SearchBar />
      <FlatList
        data={users}
        renderItem={({ item: cards }) => <Card userID={cards} />}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  list: {
    alignItems: 'center',
  },
});
