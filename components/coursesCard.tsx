import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CourseData } from '@utils/interfaces';

export default function CourseCard({
  userID,
  courseID,
  courseInfo,
}: {
  userID: string;
  courseID: string;
  courseInfo: CourseData;
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Course', { course: courseInfo })}
    >
      <Text style={styles.title}>{courseInfo.title}</Text>
      <Text style={styles.subtitle}>{courseInfo.description}</Text>
      <Text style={styles.subtitle}>
        {courseInfo.teacher
          .map((teacher) => `${teacher.name} ${teacher.lastName}`)
          .join(', ')}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    alignSelf: 'stretch', // Ensure the card stretches to fill the width
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginVertical: 5, // Vertical margin for spacing between cards
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    color: '#000',
    fontSize: 18,
    textAlign: 'left',
    fontWeight: '700',
    marginBottom: 5,
  },
  subtitle: {
    color: '#555',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 15,
  },
});
