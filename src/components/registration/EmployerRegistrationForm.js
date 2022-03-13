import React, { useMemo, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { EmployerService } from '../../services/employerService';
import { EmployerRequest } from '../../models/employerRequest';
import CompanyTypesSelect from '../CompanyTypesSelect';

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

  const employerService = useMemo(() => new EmployerService(), []);

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

  const submitHandler = (event) => {
    event.preventDefault();
    let employerRequest = new EmployerRequest(firstName, lastName, email, phone, company);
    employerService.register(employerRequest)
      .then((response) => {
        console.log(response);
        //route to the home page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className='text-center font-face-gm'>Employer Registration</h1>
      <Card style={{ width: '30rem', margin: '0 auto' }}>
        <form onSubmit={submitHandler}>
          <div className='form-group px-2 font-face-gm'>
            <label><b>First Name</b></label>
            <input
              className='form-control'
              placeholder='Enter contact first name'
              type='text'
              value={firstName}
              onChange={firstNameChangeHandler}
              name='firstName'
            />
          </div>
          <div className='form-group px-2 font-face-gm'>
            <label><b>Last Name</b></label>
            <input
              className='form-control'
              placeholder='Enter contact last name'
              type='text'
              value={lastName}
              onChange={lastNameChangeHandler}
              name='lastName'
            />
          </div>
          <div className='form-group px-2 font-face-gm'>
            <label><b>Email</b></label>
            <input
              className='form-control'
              placeholder='Enter contact email'
              type='email'
              value={email}
              onChange={emailChangeHandler}
              name='email'
            />
          </div>
          <div className='form-group px-2 font-face-gm'>
            <label><b>Phone</b></label>
            <input
              className='form-control'
              placeholder='Enter contact phone number'
              type='tel'
              value={phone}
              onChange={phoneChangeHandler}
              name='phone'
            />
          </div>
          <div className='form-group px-2 font-face-gm'>
            <label><b>Company Name</b></label>
            <input
              className='form-control'
              placeholder='Enter company name'
              type='text'
              value={company}
              onChange={companyChangeHandler}
              name='company'
            />
          </div>
          <div className='form-group px-2 font-face-gm'>
            <label><b>Company ID</b></label>
            <input
              className='form-control'
              placeholder='Enter Company ID (Employer Tax ID)'
              type='text'
              value={company}
              onChange={companyChangeHandler}
              name='company'
            />
          </div>
          <div className='form-group px-2 font-face-gm'>
            <label><b>Company Admin First Name</b></label>
            <input
              className='form-control'
              placeholder='Enter company admin first name'
              type='text'
              value={company}
              onChange={companyChangeHandler}
              name='company'
            />
          </div>
          <div className='form-group px-2 font-face-gm'>
            <label><b>Company Admin Last Name</b></label>
            <input
              className='form-control'
              placeholder='Enter company admin last name'
              type='text'
              value={company}
              onChange={companyChangeHandler}
              name='company'
            />
          </div>
          <div className='form-group pb-4 px-2 font-face-gm'>
            <label><b>Industry</b></label>
            <CompanyTypesSelect onHandleChange={(event) => setIndustry(event.target.value)
            } />
          </div>
          <div className='text-center pb-2 font-face-gm'>
            <Button style={{width: '26rem'}} type='submit'>Register</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default EmployerRegistrationForm;
