import React from 'react';
import Popup from 'reactjs-popup';
import { MdMoreHoriz, MdRemoveRedEye, MdEdit, MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';

import { StyledTrigger, StyledMenu } from './styles';

const actionsIconMap = {
  view: { icon: MdRemoveRedEye, color: 'purple' },
  edit: { icon: MdEdit, color: 'black' },
  delete: { icon: MdDelete, color: 'red' },
};

function ActionsMenu({ actions }) {
  return (
    <Popup
      trigger={() => (
        <StyledTrigger>
          <MdMoreHoriz size={20} />
        </StyledTrigger>
      )}
      on="hover"
      closeOnDocumentClick={true}
      contentStyle={{ width: 100 }}
    >
      {actions.map(action => {
        const { type, handler } = action;
        const { icon: Icon, color } = actionsIconMap[type];
        return (
          <StyledMenu>
            <button onClick={handler}>
              <div>
                <Icon color={color} size={15} />
              </div>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          </StyledMenu>
        );
      })}
    </Popup>
  );
}

export default ActionsMenu;
