import { doc, getFirestore, setDoc } from '@firebase/firestore';
import { UserData } from '@utils/interfaces';

const database = getFirestore();

export const saveUser = async (user: UserData) => {
  try {
    await setDoc(doc(database, 'users', user.id), {
      name: user.name,
      lastName: user.lastName,
    });
    return true;
  } catch (error) {
    console.error(`Failed to save user ${error}`);
    return false;
  }
};
