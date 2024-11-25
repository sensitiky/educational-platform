import { View, FlatList, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import UserCard from '@components/userCard';
import SearchBar from '@components/searchBar';
import { useEffect, useState } from 'react';
import CourseCard from '@components/coursesCard';
import { CourseData, Teacher } from '@utils/interfaces';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  //mock data
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
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <UserCard userID="1" title="Bienvenido Mario Correa" />
      <Text style={styles.text}>Materias del día</Text>
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item: course }) => (
          <CourseCard userID="1" courseID={course.id} courseInfo={course} />
        )}
      />
      <View style={styles.searchBar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  },
  searchBar: { backgroundColor: '#722f37' },
});
