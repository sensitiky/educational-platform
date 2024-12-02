import { useNavigation } from '@react-navigation/native';
import { registerUser, saveUser } from '@services/firebase';
import { IAuthenticationForm, IUser } from '@utils/interfaces';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Register({ changeTab }: IAuthenticationForm) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }
    setLoading(true);
    const userCredential = await registerUser(email, password);
    if (userCredential) {
      const user: IUser = {
        id: userCredential.user.uid,
        name: 'Juan',
        lastName: 'Perez',
        role: 'student',
      };
      const succes = await saveUser(user);
      if (succes) {
        console.log('Funciona');
        navigation.navigate('Home' as never);
      } else {
        console.log('Pincho');
      }
    }
  };

  return (
    <View className="p-5 bg-white flex">
      <Text className="text-2xl text-[#722f37] text-center mb-5 font-bold">
        Registrarse
      </Text>
      <TextInput
        className="h-12 border border-[#722f37] rounded-lg px-2 mb-4 text-black"
        placeholder="Correo Electrónico"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="h-12 border border-[#722f37] rounded-lg px-2 mb-4 text-black"
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        className="h-12 border border-[#722f37] rounded-lg px-2 mb-4 text-black"
        placeholder="Confirmar Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity
        className={`bg-[#722f37] py-4 rounded-full items-center self-center mt-2 w-48 ${
          loading ? 'opacity-50' : ''
        }`}
        onPress={handleRegister}
        disabled={loading}
      >
        <Text className="text-white text-lg font-semibold">
          {loading ? 'Cargando...' : 'Registrarse'}
        </Text>
      </TouchableOpacity>
      <Text className="text-center mt-4">¿Ya tienes una cuenta? </Text>
      <Text
        className="font-bold text-[#722f37] text-center"
        onPress={changeTab}
      >
        Inicia Sesión
      </Text>
    </View>
  );
}
