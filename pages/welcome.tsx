import React, { useState } from 'react';
import { View } from 'react-native';
import Login from '@components/auth/loginForm';
import Register from '@components/auth/registerForm';

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
  return <View className="flex-1 bg-white pt-4">{renderForm()}</View>;
}
