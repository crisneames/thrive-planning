import React, { useMemo, useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const CompanyTypesSelect = (onHandleChange) => {

  return (
    <select 
      id="companyTypes" 
      name="companyTypes" 
      placeholder='Select Company Type' 
      className='form-control font-face-gm' 
      onChange={onHandleChange}
    >
      <option value="healthcare">Health Care</option>
      <option value="media">Media-Entertainment</option>
      <option value="financial">Financial</option>
      <option value="tech">Technology</option>
      <option value="software">Software</option>
      <option value="government">Government</option>
      <option value="nonprofit">Non-Profit</option>
      <option value="other">Other</option>
    </select>
  );
};

export default CompanyTypesSelect;