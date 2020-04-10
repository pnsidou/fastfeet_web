import React, { useRef, useEffect } from 'react';

import AsyncSelect from 'react-select/async';
import { useField } from '@rocketseat/unform';

function SelectInput({ name, loadOptions, defaultOptions, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }

          return ref.state.value.map(option => option.value);
        } else {
          if (!ref.state.value) {
            return '';
          }

          return ref.state.value.value;
        }
      },
    });
  }, [fieldName, registerField, rest.isMulti]);


  function handleChange(selectedOption) {
    selectRef.current.state.value = selectedOption.value;
    return selectedOption;
  }

  return (
    <AsyncSelect
      ref={selectRef}
      defaultValue={defaultValue}
      classNamePrefix="react-select"
      loadOptions={loadOptions}
      cacheOptions
      defaultOptions={defaultOptions}
      onChange={handleChange}
      {...rest}
    />
  );
}

export default SelectInput;
