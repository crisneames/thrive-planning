import React from 'react';
import { Field } from 'formik';
import "../styles/checkboxGroup.css";
//import TextError from './TextError';

function CheckboxGroup({label, name, options, ...rest}) {
  
  return (
    <>
      <label className='px-2'><b>{label}:</b></label>
      <div className='grid-container'>
        <Field name={name}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <div style={{border: '1px solid black'}} className='grid-item'>
                  <React.Fragment key={option.key}>
                      <input
                        style={{width: '100%'}}
                        type='checkbox'
                        id={option.value}
                        {...field}
                        {...rest}
                        value={option.value}
                        checked={field.value.includes(option.value)}
                      />
                      <label className='px-2' htmlFor={option.value}>{!option.fillIn ? option.key : option.key + ' _____'}</label>
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
