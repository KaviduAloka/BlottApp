import {NavigationConstants} from '../constants';
import {navigate} from '../services/NavigationService';

export const navigateToErrorPage = (error: string) => {
  navigate(NavigationConstants.ERROR_PAGE, {error});
};
