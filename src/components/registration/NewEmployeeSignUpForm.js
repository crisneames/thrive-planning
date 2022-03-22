import React, { useMemo, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { EmployeeService } from '../../services/employerService';
import { EmployeeRequest } from '../../models/employerRequest';
import CompanyTypesSelect from '../CompanyTypesSelect';

const NewEmployeeSignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const employeeService = useMemo(() => new EmployeeService(), []);

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

  const userNameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const reEnterPasswordChangeHandler = (event) => {
    setReEnterPassword(event.target.value);
  };

  const submitHandler = (event) => {};
  //    event.preventDefault();
  //     let employeeRequest = new EmployeeRequest(
  //       firstName,
  //       lastName,
  //       email,
  //       phone,
  //       company
  //     );
  //     employeeService
  //       .register(employeeRequest)
  //       .then((response) => {
  //         console.log(response);
  //         //route to the home page
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  return (
    <>
      <h1 className='text-center font-face-gm'>New Employee Sign Up</h1>
      <Card style={{ width: '30rem', margin: '0 auto' }}>
        <form onSubmit={submitHandler}>
          <div className='form-group px-2 font-face-gm'>
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
          <div className='form-group px-2 font-face-gm'>
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
          <div className='form-group px-2 font-face-gm'>
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
          <div className='form-group px-2 font-face-gm'>
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
          <div className='form-group px-2 font-face-gm'>
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
          <div className='form-group px-2 font-face-gm'>
            <label>
              <b>User Name</b>
            </label>
            <input
              className='form-control'
              placeholder='Enter Username'
              type='text'
              value={userName}
              onChange={userNameChangeHandler}
              name='userName'
            />
          </div>
          <div className='form-group px-2 font-face-gm'>
            <label>
              <b>Password</b>
            </label>
            <input
              className='form-control'
              placeholder='Enter password'
              type='text'
              value={password}
              onChange={passwordChangeHandler}
              name='password'
            />
          </div>
          <div className='form-group px-2 font-face-gm'>
            <label>
              <b>Re-enter Password</b>
            </label>
            <input
              className='form-control'
              placeholder='Re-enter password'
              type='text'
              value={reEnterPassword}
              onChange={reEnterPasswordChangeHandler}
              name='companyAdminLastName'
            />
            <Button style={{ width: '26rem' }} type='submit'>
              Sign Up
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default NewEmployeeSignUpForm;
