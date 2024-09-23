import { User } from '../user.interface';

export interface AuthenticationState {
  token: string;
  user: User;
  isAuth: boolean;
}
