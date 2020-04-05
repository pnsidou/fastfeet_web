export function listRecipients(query) {
  return {
    type: '@recipients/LIST_REQUEST',
    payload: query,
  };
}

export function listRecipientsSuccess(recipients) {
  return {
    type: '@recipients/LIST_SUCCESS',
    payload: recipients,
  };
}

export function listRecipientsFailure() {
  return {
    type: '@recipients/LIST_FAILURE',
  };
}
