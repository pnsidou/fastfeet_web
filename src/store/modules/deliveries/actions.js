export function listDeliveries(query) {
  return {
    type: '@deliveries/LIST_REQUEST',
    payload: query,
  };
}

export function listDeliveriesSuccess(deliveries) {
  return {
    type: '@deliveries/LIST_SUCCESS',
    payload: deliveries,
  };
}

export function listDeliveriesFailure() {
  return {
    type: '@deliveries/LIST_FAILURE',
  };
}
