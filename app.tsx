import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import './global.css';
import { getAuth, onAuthStateChanged, User } from '@firebase/auth';
import { AppStack, AuthNavigator } from '@constants/router';
import { View, ActivityIndicator } from 'react-native';

export default function App() {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  if (loading) {
    return (
      <View className="flex items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
