import { requestStatuses } from 'modules/chat/constants/requestStatuses';

export function failureAction(action) {
  return `${ action }_${ requestStatuses.failure }`;
}

export function pendingAction(action) {
  return `${ action }_${ requestStatuses.pending }`;
}

export function successAction(action) {
  return `${ action }_${ requestStatuses.success }`;
}

export default (action) => {
  return {
    failure: failureAction(action),
    pending: pendingAction(action),
    success: successAction(action),
  };
}
