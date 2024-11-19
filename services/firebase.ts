import { doc, getFirestore, setDoc } from '@firebase/firestore';
import { UserData } from '@utils/interfaces';

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
    console.error(`Failed to save uesr ${error}`);
    return false;
  }
};
