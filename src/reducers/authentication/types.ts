import { User } from '@models';

export interface LoginSuccessPayload {
  user: User;
  token: string;
}
