import React, { useEffect, useState } from "react";
import Field from "./Field";

function FieldSet({ field, updateModelValue, modelValue }) {
  const [validate, setValidate] = useState(field.validate === false ? field.validate : true)
  const [label, setLabel] = useState(field.label ? field.label.replace("<br />", "") : "",)
  useEffect(() => {
    error()
    checkValidate();
  }, [])

  const checkValidate = () => {
    if (!field.errors) return;
    const validate = !field.errors.hasOwnProperty(field.fieldName);
    setValidate(validate);
  };

  const error = () => {
    return field.fieldName
      ? field.errors[field.fieldName]
      : "";
  };

  return (
    <div>
      <Field field={field}
        updateModelValue={updateModelValue}
        modelValue={modelValue} />
      {
        validate !== true && validate !== undefined ?
          <small
            className="absolute flex items-center h-5 mt-[2px] text-xs errors text-red-500"
          >
            {Array.isArray(error) ? error[0] : `Quý khách vui lòng nhập ${label}`}
          </small> : null
      }

    </div>
  );
}

export default FieldSet;
