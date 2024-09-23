import { ApplicationState } from '@models';

export const userIdSelector = (state: ApplicationState) =>
  state.authentication.user.id;
