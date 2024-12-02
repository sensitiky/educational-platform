import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ICourse } from '@utils/interfaces';
import { Text } from 'react-native';

export default function CourseCard({
  userID,
  courseID,
  courseInfo,
}: {
  userID: string;
  courseID: string;
  courseInfo: ICourse;
}) {
  const navigation = useNavigation();
  const route = ['Course', { course: courseInfo }];
  return (
    <TouchableOpacity
      className="bg-white p-4 rounded-lg m-2 elevation-md"
      onPress={() => navigation.navigate(route as never)}
    >
      <Text className="text-black text-lg font-bold mb-1">
        {courseInfo.title}
      </Text>
      <Text className="text-gray-500 text-base mb-4">
        {courseInfo.description}
      </Text>
      <Text className="text-gray-500 text-base">
        {courseInfo.teacher
          .map((teacher) => `${teacher.name} ${teacher.lastName}`)
          .join(', ')}
      </Text>
    </TouchableOpacity>
  );
}
