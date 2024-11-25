import { View, FlatList, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import UserCard from '@components/userCard';
import SearchBar from '@components/searchBar';
import { useEffect, useState } from 'react';
import CourseCard from '@components/coursesCard';
import { CourseData, Teacher } from '@utils/interfaces';

export default function Home() {
  //mock data
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
      <UserCard userID="1" title="Welcome Mario Correa" />
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item: course }) => (
          <CourseCard userID="1" courseID={course.id} courseInfo={course} />
        )}
      />
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
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
  searchBar: { backgroundColor: '#722f37' },
});
