import { Ionicons } from '@expo/vector-icons';
import { FloatingFilterProps } from '@utils/helpers';
import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
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
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={expanded}
        animationType="fade"
        onRequestClose={() => setExpanded(false)}
      >
        <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Filtrar por Profesor</Text>
          <FlatList
            data={teachers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.filterOption}
                onPress={() =>
                  handleSelectFilter(`${item.name} ${item.lastName}`)
                }
              >
                <Text style={styles.filterText}>
                  {item.name} {item.lastName}
                </Text>
              </TouchableOpacity>
            )}
            ListHeaderComponent={
              <TouchableOpacity
                style={styles.filterOption}
                onPress={() => handleSelectFilter(null)}
              >
                <Text style={[styles.filterText, styles.resetText]}>
                  Mostrar Todos
                </Text>
              </TouchableOpacity>
            }
          />
        </View>
      </Modal>
      <TouchableOpacity style={styles.button} onPress={toggleExpanded}>
        <Text style={styles.buttonText}>
          {expanded ? (
            <Ionicons name="close-outline" size={30} />
          ) : (
            <Ionicons name="search-outline" size={30} />
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#722f37',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 10,
    width: 200,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  filterOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  filterText: {
    fontSize: 16,
    color: '#6200EE',
    textAlign: 'center',
  },
  resetText: {
    fontWeight: '700',
  },
});
