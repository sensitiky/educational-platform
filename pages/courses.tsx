import UserCard from '@components/userCard';
import SearchBar from '@components/searchBar';
import { View, StyleSheet, FlatList } from 'react-native';
import CourseCard from '@components/coursesCard';

export default function Courses() {
  const users = [{ user: { id: '1', name: 'John', assigmentes: 3 } }];

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        onScroll={() => {
          // Reload or refresh the component here
        }}
        renderItem={({ item: mockUser }) => (
          <CourseCard userID={mockUser.user.id} courseID="1" />
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
