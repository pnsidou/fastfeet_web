import React from 'react';

import { StyledPopup, Title, Address, Dates, Signature } from './styles';

function DeliveryPopup({ deliveryDetails }) {
  return (
    <StyledPopup>
      <Title className="title">
        Detailed info about delivery {deliveryDetails.id}
      </Title>
      <Address>
        <div className="title"></div>
        <div>
          {deliveryDetails.street}, {deliveryDetails.number}
        </div>
        <div>
          {deliveryDetails.city}, {deliveryDetails.state}{' '}
        </div>
        <div>{deliveryDetails.zip_code}</div>
      </Address>
      <Dates>
        <div className="title">Dates</div>
        <div>
          Retrieved at: <span> {deliveryDetails.start_date}</span>
        </div>
        {deliveryDetails.cacelled_at ? (
          <div className="cancelled">
            Cancelled at: <span>{deliveryDetails.end_date}</span>
          </div>
        ) : (
          <div className="delivered">
            Delivered at: <span>{deliveryDetails.end_date}</span>
          </div>
        )}
      </Dates>
      <Signature>
        <div className="title">Recipient's signature</div>
        <div>{deliveryDetails.signature}</div>
      </Signature>
    </StyledPopup>
  );
}

export default DeliveryPopup;
