import { useState, useCallback } from 'react';

function useFormData(elements, submitHandler) {
  const initialState = elements.reduce((acc, curr) => {
    acc[curr.name] = curr.value;
    return acc;
  }, {});

  const [formState, setFormState] = useState(initialState);

  const setFieldValue = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = useCallback(
    e => {
      const formData = new FormData();
      Object.keys(formState).forEach(key => {
        formData.append(key, formState[key]);
      });
      submitHandler(e, formData);
    },
    [formState]
  );

  return {
    formState, // { ...current form state }
    setFieldValue, // setFieldValue(name, value)
    handleSubmit // onSubmit={handleSubmit}
  };
}

export default useFormData;
