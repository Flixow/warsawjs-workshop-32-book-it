import { AppToast } from 'shared/components';
const hasDocument = typeof document !== 'undefined';

export default function notificationMiddleware() {
  return next => ({ showToast = true, successToast, ...action }) => {
    let options;

    if (showToast) {
      if (/(.*)_(FAILURE)/.test(action.type)) {
        options = {
          message: 'Ups, something went wrong.',
          intent: 'DANGER',
        };

        if (action.tryAgain) {
          options.action = {
            onClick: action.tryAgain,
            text: 'Try again',
          };
        }
      }

      if (successToast && /(.*)_(SUCCESS)/.test(action.type)) {
        options = {
          message: successToast,
          type: 'success',
        };
      }

      if (hasDocument && options) {
        AppToast(options);
      }
    }

    next(action);
  };
}
