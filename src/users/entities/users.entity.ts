export class User {
  userId: string;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  password: string;
}

export class Users {
  users: User[];
}
