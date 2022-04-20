import React from "react";
import { Field, FieldProps } from "formik";
import "../styles/checkboxGroup.css";

type Props = {
  label: string;
  name: string;
  options: Array<{ key: string; value: string; fillIn?: boolean }>;
};

function CheckboxGroup({ label, name, options }: Props) {
  return (
    <>
      <label className="px-2">
        <b>{label}:</b>
      </label>
      <div className="grid-container">
        <Field name={name}>
          {({ field }: FieldProps<string>) => {
            return options.map((option) => {
              return (
                <div
                  style={{ border: "1px solid black" }}
                  className="grid-item"
                  key={option.key}
                >
                  <React.Fragment key={option.key}>
                    <input
                      style={{ width: "100%" }}
                      type="checkbox"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={
                        field.value !== undefined
                          ? field.value.includes(option.value)
                          : false
                      }
                    />
                    <label
                      className="px-2"
                      htmlFor={option.value}
                      key={option.key}
                    >
                      {!option.fillIn ? option.key : option.key + " _____"}
                    </label>
                  </React.Fragment>
                </div>
              );
            });
          }}
        </Field>
      </div>
    </>
  );
}

export default CheckboxGroup;
