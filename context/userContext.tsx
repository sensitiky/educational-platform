import React, { useState, useEffect, ReactNode } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { doc, getDoc, getFirestore } from '@firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '@utils/interfaces';
import { UserContext } from '@utils/helpers';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        try {
          const collectionName = authUser.displayName?.includes('teacher')
            ? 'teacherCollection'
            : 'studentCollection';
          const userDocRef = doc(db, collectionName, authUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUser(userDoc.data() as IUser);
          } else {
            console.warn(
              'No se encontró el documento del usuario en Firestore'
            );
            setUser(null);
          }

          await AsyncStorage.setItem('@userUID', authUser.uid).catch(
            console.error
          );
        } catch (error) {
          console.error('Error al obtener los datos del usuario:', error);
          setUser(null);
        }
      } else {
        setUser(null);
        await AsyncStorage.removeItem('@userUID').catch(console.error);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [auth, db]);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
