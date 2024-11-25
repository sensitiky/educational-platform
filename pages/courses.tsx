import SearchBar from '@components/searchBar';
import { View, StyleSheet, FlatList } from 'react-native';
import CourseCard from '@components/coursesCard';
import { CourseData, Teacher } from '@utils/interfaces';
import { useState } from 'react';

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const teacher: Teacher[] = [{ id: '1', name: 'John', lastName: 'Doe' }];
  const courses: CourseData[] = [
    {
      id: '1',
      title: 'Matemáticas',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
    {
      id: '2',
      title: 'Programación 1',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
    {
      id: '3',
      title: 'Lógica',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
    {
      id: '4',
      title: 'Sistema Operativo',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
    {
      id: '5',
      title: 'Estructura de Datos',
      description: '1° TSAS 2024',
      teacher: teacher,
    },
  ];
  const filteredCourses = courses.filter((course) =>
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
      </View>
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
