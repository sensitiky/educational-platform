import { UserData } from '@utils/interfaces';

export class User implements UserData {
  id: string;
  name: string;
  lastName: string;
  role: string;

  constructor(id: string, name: string, lastName: string, role: string) {
    (this.id = id),
      (this.name = name),
      (this.lastName = lastName),
      (this.role = role);
  }
}
