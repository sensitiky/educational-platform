import { View, FlatList, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import UserCard from '@components/userCard';
import SearchBar from '@components/searchBar';
import { useEffect, useState } from 'react';

export default function Home() {
  //mock data
  const users = [{ user: { id: '1', name: 'John', assigmentes: 3 } }];

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item: mockUser }) => (
          <UserCard
            userID={mockUser.user.id}
            title={`Welcome ${mockUser.user.name}`}
          />
        )}
        keyExtractor={(item) => item.user.id}
        contentContainerStyle={styles.list}
      />
      <SearchBar />
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
