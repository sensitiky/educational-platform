import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import UserCard from '@components/userCard';
import CourseCard from '@components/coursesCard';
import { CourseData, Teacher } from '@utils/interfaces';
import FloatingFilter from '@components/floatingFilter';

export default function Home() {
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);

  // Mock data
  const teacher: Teacher[] = [
    { id: '1', name: 'John', lastName: 'Doe' },
    { id: '2', name: 'Juan', lastName: 'Perez' },
  ];

  const courses: CourseData[] = [
    {
      id: '1',
      title: 'Matemáticas',
      description: '1° TSAS 2024',
      teacher: [teacher[0]],
    },
    {
      id: '2',
      title: 'Programación 1',
      description: '1° TSAS 2024',
      teacher: [teacher[1]],
    },
    {
      id: '3',
      title: 'Lógica',
      description: '1° TSAS 2024',
      teacher: [teacher[0], teacher[1]],
    },
    {
      id: '4',
      title: 'Sistema Operativo',
      description: '1° TSAS 2024',
      teacher: [teacher[1]],
    },
    {
      id: '5',
      title: 'Estructura de Datos',
      description: '1° TSAS 2024',
      teacher: [teacher[0]],
    },
  ];

  const filteredCourses = selectedTeacher
    ? courses.filter((course) =>
        course.teacher.some(
          (t) =>
            `${t.name} ${t.lastName}`.toLowerCase() ===
            selectedTeacher.toLowerCase()
        )
      )
    : courses;

  const handleFilterChange = (teacherName: string | null) => {
    setSelectedTeacher(teacherName);
  };

  return (
    <View style={styles.container}>
      <UserCard userID="1" title="Bienvenido Mario Correa" />
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item: course }) => (
          <CourseCard userID="1" courseID={course.id} courseInfo={course} />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No se encontraron cursos.</Text>
          </View>
        }
        contentContainerStyle={styles.list}
      />
      <FloatingFilter onValueChange={handleFilterChange} teachers={teacher} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  list: {
    paddingBottom: 100,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
  },
});
