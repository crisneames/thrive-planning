import React from 'react';
import { Field, ErrorMessage } from 'formik';
//import TextError from './TextError';

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div style={{ display: 'flex' }}>
      <label className='px-2'><b>{label}:</b></label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div style={{border: '1px solid black'}}>
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
                  <label className='px-2' style={{ textAlign: 'left' }} htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              </div>
            );
          });
        }}
      </Field>
      <br />
      {/* <ErrorMessage component={TextError} name={name} /> */}
    </div>
  );
}

export default CheckboxGroup;
