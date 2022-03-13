import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const EmployerRegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [companyAdminFirstName, setCompanyAdminFirstName] = useState('');
  const [companyAdminLastName, setCompanyAdminLastName] = useState('');
  const [industry, setIndustry] = useState('');

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const companyChangeHandler = (event) => {
    setCompany(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };

  const companyIdChangeHandler = (event) => {
    setCompanyId(event.target.value);
  };

  const companyAdminFirstNameChangeHandler = (event) => {
    setCompanyAdminFirstName(event.target.value);
  };

  const companyAdminLastNameChangeHandler = (event) => {
    setCompanyAdminLastName(event.target.value);
  };

  const industryChangeHandler = (event) => {
    setIndustry(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card style={{ width: '30rem', margin: '0 auto' }}>
      <form onSubmit={submitHandler}>
        <div className='form-group px-2'>
          <label>
            <b>First Name</b>
          </label>
          <input
            className='form-control'
            placeholder='Enter contact first name'
            type='text'
            value={firstName}
            onChange={firstNameChangeHandler}
            name='firstName'
          />
        </div>
        <div className='form-group px-2'>
          <label>
            <b>Last Name</b>
          </label>
          <input
            className='form-control'
            placeholder='Enter contact last name'
            type='text'
            value={lastName}
            onChange={lastNameChangeHandler}
            name='lastName'
          />
        </div>
        <div className='form-group px-2'>
          <label>
            <b>Email</b>
          </label>
          <input
            className='form-control'
            placeholder='Enter contact email'
            type='email'
            value={email}
            onChange={emailChangeHandler}
            name='email'
          />
        </div>
        <div className='form-group px-2'>
          <label>
            <b>Phone</b>
          </label>
          <input
            className='form-control'
            placeholder='Enter contact phone number'
            type='tel'
            value={phone}
            onChange={phoneChangeHandler}
            name='phone'
          />
        </div>
        <div className='form-group px-2'>
          <label>
            <b>Company Name</b>
          </label>
          <input
            className='form-control'
            placeholder='Enter company name'
            type='text'
            value={company}
            onChange={companyChangeHandler}
            name='company'
          />
        </div>
        <div className='form-group px-2'>
          <label>
            <b>Company ID</b>
          </label>
          <input
            className='form-control'
            placeholder='Enter Company ID (Employer Tax ID)'
            type='text'
            value={companyId}
            onChange={companyIdChangeHandler}
            name='company'
          />
        </div>
        <div className='form-group px-2'>
          <label>
            <b>Company Admin First Name</b>
          </label>
          <input
            className='form-control'
            placeholder='Enter company admin first name'
            type='text'
            value={companyAdminFirstName}
            onChange={companyAdminFirstNameChangeHandler}
            name='company'
          />
        </div>
        <div className='form-group px-2'>
          <label>
            <b>Company Admin Last Name</b>
          </label>
          <input
            className='form-control'
            placeholder='Enter company admin last name'
            type='text'
            value={companyAdminLastName}
            onChange={companyAdminLastNameChangeHandler}
            name='company'
          />
        </div>
        <div className='form-group pb-4 px-2'>
          <label>
            <b>Industry</b>
          </label>
          <input
            className='form-control'
            placeholder='Enter industry'
            type='text'
            value={industry}
            onChange={industryChangeHandler}
            name='company'
          />
        </div>
        <div className='text-center pb-2'>
          <Button style={{ width: '26rem' }} type='submit'>
            Register
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default EmployerRegistrationForm;
