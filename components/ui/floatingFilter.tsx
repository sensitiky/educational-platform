import { Ionicons } from '@expo/vector-icons';
import { FloatingFilterProps } from '@utils/types';
import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';

export default function FloatingFilter({
  onValueChange,
  teachers,
}: FloatingFilterProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleSelectFilter = (teacherName: string | null) => {
    onValueChange(teacherName);
    setExpanded(false);
  };

  return (
    <View className="absolute bottom-8 right-8 items-center justify-center p-2">
      <Modal
        transparent={true}
        visible={expanded}
        animationType="fade"
        onRequestClose={() => setExpanded(false)}
      >
        <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
          <View className="flex-1 bg-black/15" />
        </TouchableWithoutFeedback>
        <View className="absolute bottom-24 right-8 bg-white p-5 rounded-lg w-52">
          <Text className="text-lg font-bold text-center mb-4">
            Filtrar por Profesor
          </Text>
          <FlatList
            data={teachers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="py-4 border-bborder-gray-200"
                onPress={() =>
                  handleSelectFilter(`${item.name} ${item.lastName}`)
                }
              >
                <Text className="text-base text-purple-700 text-center">
                  {item.name} {item.lastName}
                </Text>
              </TouchableOpacity>
            )}
            ListHeaderComponent={
              <TouchableOpacity
                className="py-2 border-b border-gray-200"
                onPress={() => handleSelectFilter(null)}
              >
                <Text className="text-base text-purple-700 font-bold text-center">
                  Mostrar Todos
                </Text>
              </TouchableOpacity>
            }
          />
        </View>
      </Modal>
      <TouchableOpacity
        className="bg-[#722f37] size-16 rounded-full items-center justify-center elevation-sm"
        onPress={toggleExpanded}
      >
        <Ionicons
          name={expanded ? 'close-outline' : 'search-outline'}
          size={38}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}
