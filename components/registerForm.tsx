import { useNavigation } from '@react-navigation/native';
import { registerUser, saveUser } from '@services/firebase';
import { AuthenticationFormProps, UserData } from '@utils/interfaces';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function Register({ changeTab }: AuthenticationFormProps) {
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
      const user: UserData = {
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
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Cargando...' : 'Registrarse'}
        </Text>
      </TouchableOpacity>
      <Text style={{ textAlign: 'center' }}>¿Ya tienes una cuenta? </Text>
      <Text
        style={{ fontWeight: 'bold', color: '#722f37', textAlign: 'center' }}
        onPress={changeTab}
      >
        Inicia Sesión
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#722f37',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '700',
  },
  input: {
    height: 50,
    borderColor: '#722f37',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#000',
  },
  button: {
    backgroundColor: '#722f37',
    paddingVertical: 15,
    borderRadius: 99,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
