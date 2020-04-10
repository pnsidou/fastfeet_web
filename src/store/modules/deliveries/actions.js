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

export function registerDelivery(data) {
  return {
    type: '@deliveries/REGISTER_REQUEST',
    payload: data,
  };
}

export function registerDeliverySuccess() {
  return {
    type: '@deliveries/REGISTER_SUCCESS',
  };
}

export function registerDeliveryFailure() {
  return {
    type: '@deliveries/REGISTER_FAILURE',
  };
}

export function deleteDelivery(id) {
  return {
    type: '@deliveries/DELETE_REQUEST',
    payload: { id },
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

export function updateDelivery(id, data) {
  return {
    type: '@deliveries/UPDATE_REQUEST',
    payload: { id, data },
  };
}

export function updateDeliverySuccess() {
  return {
    type: '@deliveries/UPDATE_SUCCESS',
  };
}

export function updateDeliveryFailure() {
  return {
    type: '@deliveries/UPDATE_FAILURE',
  };
}
