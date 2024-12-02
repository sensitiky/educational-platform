import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IAuthenticationForm } from '@utils/interfaces';
import { loginUser } from '@services/firebase';

export default function Login({ changeTab }: IAuthenticationForm) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    setLoading(true);
    const success = await loginUser(email, password);
    if (success) {
      navigation.navigate('Home' as never);
    } else {
      Alert.alert('Error al iniciar sesión');
    }
  };

  return (
    <View className="p-4 flex bg-white flex-1">
      <Text className="text-2xl text-[#722f37] text-center mb-5 font-bold">
        Iniciar Sesión
      </Text>
      <TextInput
        className="h-12 border border-[#722f37] rounded px-2 mb-4 text-black"
        placeholder="Correo Electrónico"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="h-12 border border-[#722f37] rounded px-2 mb-4 text-black"
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        className={`bg-[#722f37] py-4 rounded-full items-center self-center mt-2 w-48 ${
          loading ? 'opacity-50' : ''
        }`}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text className="text-white text-lg font-semibold text-center">
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </Text>
      </TouchableOpacity>
      <Text className="mt-4 text-center">¿No tienes una cuenta? </Text>
      <Text
        className="font-bold text-[#722f37] text-center"
        onPress={changeTab}
      >
        Registrate
      </Text>
    </View>
  );
}
