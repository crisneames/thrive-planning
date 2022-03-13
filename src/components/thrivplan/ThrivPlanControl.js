import CheckboxGroup from './CheckboxGroup';

import React from 'react';

function ThrivPlanControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'checkbox':
      return <CheckboxGroup {...rest} />;
    default:
      return null;
  }
}

export default ThrivPlanControl;
