import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#888"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 99,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    margin: 12,
    elevation: 2,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
});