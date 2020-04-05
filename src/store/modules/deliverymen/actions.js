export function listDeliverymen(query) {
  return {
    type: '@deliverymen/LIST_REQUEST',
    payload: query,
  };
}

export function listDeliverymenSuccess(deliverymen) {
  return {
    type: '@deliverymen/LIST_SUCCESS',
    payload: deliverymen,
  };
}

export function listDeliverymenFailure() {
  return {
    type: '@deliverymen/LIST_FAILURE',
  };
}
