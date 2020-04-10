import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { StyledForm } from './styles';

function FormFrame({ title, handleRegister, schema, formBody, defaultValue }) {
  const history = useHistory();

  const handleGoBack = () => history.goBack();

  const handleSubmit = data => {
    handleRegister(data);
    history.goBack();
  };

  return (
    <StyledForm initialData={defaultValue} onSubmit={handleSubmit}>
      <div className="header">
        <h1>{title}</h1>
        <div>
          <button className="back" type="button" onClick={handleGoBack}>
            <MdChevronLeft size={20} color="white" />
            Back
          </button>
          <button className="save" type="submit">
            <MdCheck size={20} color="white" />
            Save
          </button>
        </div>
      </div>
      <div className="body">{formBody}</div>
    </StyledForm>
  );
}

export default FormFrame;
