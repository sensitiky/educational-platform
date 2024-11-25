import UserCard from '@components/userCard';
import SearchBar from '@components/searchBar';
import { View, StyleSheet, FlatList } from 'react-native';
import CourseCard from '@components/coursesCard';
import { CourseData, Teacher } from '@utils/interfaces';

export default function Courses() {
  const users = [{ user: { id: '1', name: 'John', assigmentes: 3 } }];
  const teacher: Teacher[] = [{ id: '1', name: 'John', lastName: 'Doe' }];
  const courses: CourseData[] = [
    {
      id: '1',
      title: 'Mathematics',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
    {
      id: '2',
      title: 'Spanish',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
    {
      id: '3',
      title: 'Spanish',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
    {
      id: '4',
      title: 'Spanish',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
    {
      id: '5',
      title: 'Spanish',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item: course }) => (
          <CourseCard courseInfo={course} userID="1" courseID={course.id} />
        )}
      />
      <SearchBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  date: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
