export type UserId = number;

export interface User {
  id: UserId;
  name: string;
  email: string;
}

export interface UserState extends User {
  isLoggedIn: boolean;
}
