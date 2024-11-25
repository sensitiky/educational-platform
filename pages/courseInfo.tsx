import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Props } from '@utils/helpers';

export default function CourseInfo({ route }: Props) {
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <Text style={styles.teachers}>
        Teachers:{' '}
        {course.teacher
          .map((teacher) => `${teacher.name} ${teacher.lastName}`)
          .join(', ')}
      </Text>
      {/* Add more course details here as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  teachers: {
    fontSize: 16,
    color: '#333',
  },
});
