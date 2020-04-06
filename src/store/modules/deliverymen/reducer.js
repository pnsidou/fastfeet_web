import React from 'react';

import produce from 'immer';

import Avatar from '~/components/Avatar';

const avatarColors = ['#dd8', '#bbe', '#fcc', '#ada'];

const INITIAL_STATE = { list: [] };

export default function deliverymen(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliverymen/LIST_SUCCESS': {
        const deliverymen = action.payload.map(deliveryman => {
          const color =
            avatarColors[Math.floor(Math.random() * avatarColors.length)];

          const avatar = (
            <Avatar
              name={deliveryman.name}
              url={deliveryman.avatar}
              color={color}
            />
          );

          return { ...deliveryman, avatar };
        });
        draft.list = deliverymen;
        break;
      }
      default:
        draft = state;
        break;
    }
  });
}
