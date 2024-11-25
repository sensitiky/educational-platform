import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function UserCard({
  userID,
  title,
}: {
  userID: string;
  title: string;
}) {
  const navigation = useNavigation();
  const imgMock = 'https://avatars.githubusercontent.com/u/29111576?v=4';

  return (
    <View style={styles.card}>
      <Image src={imgMock} style={styles.avatar} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>Tareas del día: 3</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Courses' as never);
          }}
          style={styles.secondaryButton}
        >
          <Text style={{ color: 'black', fontSize: 18, alignItems: 'center' }}>
            Perfil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Courses' as never);
          }}
          style={styles.primaryButton}
        >
          <Text style={{ color: 'white', fontSize: 18, alignItems: 'center' }}>
            Materias
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 20,
  },
  avatar: {
    backgroundColor: 'blue',
    height: 100,
    borderRadius: 999,
    width: 100,
    alignSelf: 'center',
    padding: 2,
  },
  title: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryButton: {
    borderRadius: 99,
    backgroundColor: '#722f37',
    width: '45%',
    alignItems: 'center',
    padding: 10,
  },
  secondaryButton: {
    borderRadius: 99,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '45%',
    alignItems: 'center',
    padding: 10,
  },
  loading: {
    color: '#000000',
    textAlign: 'center',
    margin: 20,
  },
});
