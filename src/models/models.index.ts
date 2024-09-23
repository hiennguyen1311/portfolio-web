export type { ApplicationState } from './reducers/app-reducers.models';
export type { AuthenticationState } from './reducers/authentication.models';
export * from './user.interface';
export * from './exception-response.interface';
export * from './login.interfaces';
export * from './data-api-response.interfaces';
export * from './conversation.interfaces';
export * from './message.interfaces';

export interface MenuItem {
  title: string;
  onClick(): void;
}
