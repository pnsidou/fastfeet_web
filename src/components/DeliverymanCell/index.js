import React from 'react';
import { useSelector } from 'react-redux';

import { StyledCell } from './styles';

function DeliverymanCell({ deliverymanId }) {
  const deliverymen = useSelector(state => state.deliverymen.list);

  const deliveryman =
    deliverymanId &&
    deliverymen.find(deliveryman => deliveryman.id === deliverymanId);

  return (
    <>
      {deliveryman && (
        <StyledCell>
          {deliveryman.avatar.component}
          {deliveryman.name}
        </StyledCell>
      )}
    </>
  );
}

export default DeliverymanCell;
