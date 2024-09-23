import { ApplicationState } from '@models';
import {
  UseSelector,
  useSelector as useSelectorHook,
  shallowEqual,
} from 'react-redux';

export const useSelector: UseSelector<ApplicationState> = useSelectorHook;

export const useShallowSelector = (
  selector: (state: ApplicationState) => any,
) => {
  return useSelectorHook(selector, shallowEqual);
};
