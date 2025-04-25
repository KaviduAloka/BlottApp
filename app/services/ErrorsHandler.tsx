import {navigateToErrorPage} from '../navigation/navigationHelpers';

function* ErrorHandler(error: string) {
  navigateToErrorPage(error);
}

export default ErrorHandler;
