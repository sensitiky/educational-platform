import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Login from '@components/loginForm';
import Register from '@components/registerForm';

export default function Welcome() {
  const [activeTab, setActiveTab] = useState<'Login' | 'Register'>('Login');

  const renderForm = () => {
    switch (activeTab) {
      case 'Login':
        return <Login changeTab={() => setActiveTab('Register')} />;
      case 'Register':
        return <Register changeTab={() => setActiveTab('Login')} />;
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderForm()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    paddingVertical: 1,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    marginHorizontal: 10,
  },
  activeTab: {
    borderBottomColor: '#722f37',
  },
  tabText: {
    fontSize: 18,
    color: '#722f37',
    fontWeight: '500',
  },
  activeTabText: {
    fontWeight: '700',
  },
});
