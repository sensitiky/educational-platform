import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthenticationFormProps } from '@utils/interfaces';
//import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ changeTab }: AuthenticationFormProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  //const auth = getAuth();
  /*const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, ingresa el correo y la contraseña.');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Éxito', 'Has iniciado sesión correctamente.');
      // Navega a la pantalla principal o realiza otras acciones
    } catch (error: any) {
      Alert.alert('Error de Inicio de Sesión', error.message);
    } finally {
      setLoading(false);
    }
  };*/

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
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
      {/* TODO: implementar el envio de datos a firebase*/}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home' as never)}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </Text>
      </TouchableOpacity>
      <Text>¿No tienes una cuenta? </Text>
      <Text
        style={{ fontWeight: 'bold', color: '#722f37' }}
        onPress={changeTab}
      >
        Registrate
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
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
