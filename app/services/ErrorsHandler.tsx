import {navigateToErrorPage} from '../navigation/navigationHelpers';

function* ErrorHandler(error: any) {
  navigateToErrorPage(error.toString());
}

export default ErrorHandler;
