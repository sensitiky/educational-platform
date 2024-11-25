// CourseCard.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
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
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCourseData(courseInfo);
      } catch (err: any) {
        setError(`Error ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, []);
  if (loading) {
    return (
      <View style={styles.card}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.card}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{courseData?.title}</Text>
      <Text style={styles.subtitle}>{courseData?.description}</Text>
      <Text style={styles.subtitle}>
        {courseData?.teacher.map(
          (teacher) => teacher.name + ' ' + teacher.lastName
        )}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    margin: 5,
    elevation: 8,
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
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
  },
  primaryButton: {
    borderRadius: 99,
    backgroundColor: '#007AFF',
    width: '45%',
    alignItems: 'center',
    padding: 10,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  secondaryButton: {
    borderRadius: 99,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '45%',
    alignItems: 'center',
    padding: 10,
  },
  secondaryButtonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});
