import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { EmployerService } from '../../services/employerService';
import { EmployerSignUpRequest } from '../../models/employerSignUpRequest';
import { useParams } from 'react-router';
import { NIL as EmptyGuid } from 'uuid';

const EmployerSignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const params = useParams< {companyId: string} >();

  const companyId = params.companyId;

  const employerService = useMemo(() => new EmployerService(), []);

  const firstNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const phoneChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const userNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const reEnterPasswordChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setReEnterPassword(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //TODO: password check to see if it matches what was entered
    let employerSignUpRequest = new EmployerSignUpRequest(
      firstName,
      lastName,
      email,
      phone,
      userName,
      password,
      companyId ?? EmptyGuid
    );
    employerService
      .signup(employerSignUpRequest)
      .then((response) => {
        console.log(response);
        //route to the home page
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h1 className='text-center font-face-gm'>Employer Sign Up</h1>
      <Card style={{ width: '30rem', margin: '0 auto' }}>
        <form onSubmit={submitHandler}>
          <div className='form-group px-2 font-face-gm'>
            <label>
              <b>First Name</b>
            </label>
            <input
              className='form-control'
              placeholder='Enter first name'
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
              placeholder='Enter last name'
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
              placeholder='Enter email'
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
              placeholder='Enter phone number'
              type='tel'
              value={phone}
              onChange={phoneChangeHandler}
              name='phone'
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
              <b>Verify Password</b>
            </label>
            <input
              className='form-control'
              placeholder='Verify password'
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

export default EmployerSignUpForm;
