import { AuthenticationState } from './authentication.models';

export interface ApplicationState {
  authentication: AuthenticationState;
  api: any;
}
