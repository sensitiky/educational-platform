import { initializeApp } from '@firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from '@firebase/auth';
import { doc, getFirestore, setDoc } from '@firebase/firestore';
import { UserData } from '@utils/interfaces';

//TODO: figure it out how to add .env without config import or some external tool
// Maybe need to create an import with babel?¿
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore();

export const saveUser = async (user: UserData): Promise<boolean> => {
  try {
    const collectionName =
      user.role === 'teacher' ? 'teacherCollection' : 'studentCollection';

    const userDocRef = doc(database, collectionName, user.id);

    const userData = {
      name: user.name,
      lastName: user.lastName,
      role: user.role,
    };

    await setDoc(userDocRef, userData);
    return true;
  } catch (error) {
    console.error(`Failed to save user ${error}`);
    return false;
  }
};
export const loginUser = async (
  email: string,
  password: string
): Promise<UserCredential | null> => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error(`Failed to login ${error}`);
    return null;
  }
};
export const registerUser = async (
  email: string,
  password: string
): Promise<UserCredential | null> => {
  try {
    const registeredUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return registeredUser;
  } catch (error) {
    console.error(`Failed to register ${error}`);
    return null;
  }
};
