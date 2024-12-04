import SearchBar from '@components/ui/searchBar';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import CourseCard from '@components/ui/coursesCard';
import { ICourse, ITeacher } from '@utils/interfaces';
import { useState } from 'react';

export default function Courses({ courseInfo }: { courseInfo: ICourse[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courseInfo.filter((course: ICourse) =>
    course.title.toLowerCase().includes(searchQuery)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item: course }) => (
          <CourseCard courseInfo={course} userID="1" courseID={course.id} />
        )}
      />
      <View style={styles.searchBarContainer}>
        <SearchBar
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>{' '}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    backgroundColor: '#722f37',
  },
  date: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
