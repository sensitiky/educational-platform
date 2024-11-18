import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { UserData } from '@utils/interfaces';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from '@firebase/firestore';

// const database = getFirestore();

export default function Card({ userID }: { userID: string }) {
  /*const [user, setUser] = useState<UserData | null>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      const userDoc = await getDoc(doc(database, 'users', userID));
      if (userDoc.exists()) {
        setUser({
          id: userDoc.id,
          ...(userDoc.data() as Omit<UserData, 'id'>),
        });
      }
    };
    fetchUser();
  }, [userID]);

  if (!user) {
    return <Text style={styles.loading}>Loading...</Text>;
  }*/
  const handleClick = () => {
    console.log('Presionado');
  };
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Welcome John Doe</Text>
      <Text style={styles.title}>Assigments today: 3</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleClick} style={styles.secondaryButton}>
          <Text style={styles.title}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick} style={styles.primaryButton}>
          <Text style={styles.title}>Assigments</Text>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonsContainer: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryButton: {
    borderRadius: 99,
    backgroundColor: '#007AFF',
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
