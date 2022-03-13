import React, { Component, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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
  };

  return (
    <Card className='text-center' style={{ width: '18rem', margin: '0 auto' }}>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label>First Name</label>
          <input
            placeholder='Enter first name'
            type='text'
            value={firstName}
            onChange={firstNameChangeHandler}
            name='firstName'
          />
        </div>
        <div className='pb-4'>
          <label>Last Name: </label>
          <br />
          <input
            type='text'
            value={lastName}
            onChange={lastNameChangeHandler}
            name='lastName'
          />
        </div>
        <div className='pb-4'>
          <label>Company: </label>
          <br />
          <input
            type='text'
            value={company}
            onChange={companyChangeHandler}
            name='company'
          />
        </div>
        <div className='pb-4'>
          <label>Email: </label>
          <br />
          <input
            type='text'
            value={email}
            onChange={emailChangeHandler}
            name='email'
          />
        </div>
        <div className='pb-4'>
          <label>Phone: </label>
          <br />
          <input
            type='text'
            value={phone}
            onChange={phoneChangeHandler}
            name='phone'
          />
        </div>
        <div>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
