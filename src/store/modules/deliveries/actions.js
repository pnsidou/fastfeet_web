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

export function deleteDelivery(id) {
  return {
    type: '@deliveries/DELETE_REQUEST',
    payload: id,
  };
}

export function deleteDeliverySuccess() {
  return {
    type: '@deliveries/DELETE_SUCCESS',
  };
}

export function deleteDeliveryFailure() {
  return {
    type: '@deliveries/DELETE_FAILURE',
  };
}
