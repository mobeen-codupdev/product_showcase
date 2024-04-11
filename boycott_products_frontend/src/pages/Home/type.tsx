export interface User {
  id: string;
  name: string;
  email: string;
}
export interface UserState {
  loading: boolean;
  users: Array<User>;
  error: string | undefined;
}
