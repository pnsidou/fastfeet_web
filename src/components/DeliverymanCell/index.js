import React from 'react';
import { useSelector } from 'react-redux';

import { StyledCell } from './styles';
import Avatar from '~/components/Avatar';

function DeliverymanCell({ deliverymanId }) {
  const deliverymen = useSelector(state => state.deliverymen.list);

  const deliveryman =
    deliverymanId &&
    deliverymen.find(deliveryman => deliveryman.id === deliverymanId);

  return (
    deliveryman && (
      <StyledCell>
        {deliveryman.avatar}
        {deliveryman.name}
      </StyledCell>
    )
  );
}

export default DeliverymanCell;
