import React, { Fragment, useEffect, useState } from "react";
import SelectSource from "./SelectSource";

export default function Field({ field, updateModelValue, modelValue }) {
  const [fieldId, setFieldId] = useState("");

  const [isRequired, setIsRequired] = useState(false);

  useEffect(() => {
    setFieldId(Math.random().toString(36).substring(2, 9));
    checkRequired();
  }, []);

  const checkRequired = () => {
    if (!field.rules) return
    const isRequired = field.rules[field.fieldName]
      ? field.rules[field.fieldName].includes("required")
      : false;
    setIsRequired(isRequired);
  };


  return (
    <Fragment>

      <label htmlFor={field.placeholder} className="font-bold text-gray-700 text-[14px] mb-[4px] block">
        {field.title} {isRequired && <span className="text-red-500">*</span>}
      </label>

      {(() => {
        if (field.type === undefined || field.type === "text" || field.type === "password" || field.type === "number" || field.type === "datetime-local" || field.type === "date" || field.type === "time") {
          return <input
            step="any"
            value={field.type === "date" && modelValue ? new Date(modelValue).toJSON()?.slice(0, 10) : modelValue}
            onChange={(e) => updateModelValue(e.target.value)} type={field.type}
            className={field.className ?? " px-[20px] py-[10px] rounded-[10px] "}
            placeholder={field.placeholder}
            disabled={field.disable} />;
        }

        if (field.type === "textarea") {
          return <textarea value={modelValue}
            onChange={(e) => updateModelValue(e.target.value)}
            rows={field.rows ?? 3}
            placeholder={field.placeholder}
            disabled={field.disable}
            className={field.className ?? "w-full block border-gray-200 border-2"} />;
        }

        if (field.type === "radio") {
          return (
            <Fragment>
              <label className="text-gray-700">{field.title}</label>
              {field.options && field.options.length > 0
                ? field.options?.map((item, index) => {
                  return (
                    <div className="flex space-x-2 text-[14px]" key={index}>
                      <input
                        id={`${fieldId}${index}`}
                        type={field.type} name={fieldId}
                        value={item.value}
                        onChange={(e) => updateModelValue(e.target.value)}
                        placeholder={field.placeholder}
                        className="border border-gray-500 radio-item" />
                      <label htmlFor={`${fieldId}${index}`}
                        className="text-gray-700 cursor-pointer">
                        {item.label}
                      </label>
                    </div>
                  );
                })
                : null}
            </Fragment>
          );
        }
        if (field.type === "select_single") {
          return (
            <Fragment>
              <div className={field.className ?? "select-control"}
              >
                <select
                  value={modelValue}
                  onChange={(e) => updateModelValue(e.target.value)}
                  className="w-full h-full border border-gray-300 px-[20px] py-[10px]">
                  {field.options?.map((item, index) => {
                    return (
                      <option key={index} value={field.typeValue === 'id' ? item.id : item.value}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </Fragment>
          );
        }

        if (field.type === "select_source") {
          return <SelectSource field={field} />;
        }
      })()}
    </Fragment>
  );
}
