import React, { useContext, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import UserCard from '@components/ui/userCard';
import CourseCard from '@components/ui/coursesCard';
import { IAssigments, ICourse, ITeacher } from '@utils/interfaces';
import FloatingFilter from '@components/ui/floatingFilter';
import { logoutUser } from '@services/firebase';
import { UserContext } from '@utils/helpers';

export default function Home() {
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);
  const { user } = useContext(UserContext);
  // Mock data
  const teacher: ITeacher[] = [
    { id: '1', name: 'John', lastName: 'Doe' },
    { id: '2', name: 'Juan', lastName: 'Perez' },
  ];

  const tasks: IAssigments[] = [
    { title: 'Cuack', description: 'Cuack 2', startDay: '', endDay: '' },
  ];
  const courses: ICourse[] = [
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
      assigments: [tasks[0]],
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
      <UserCard
        userID={user?.id || ''}
        title={`Bienvenido ${user?.name}`}
        courses={courses}
      />
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item: course }) => (
          <CourseCard
            userID={user?.id || ''}
            courseID={course.id}
            courseInfo={course}
          />
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
