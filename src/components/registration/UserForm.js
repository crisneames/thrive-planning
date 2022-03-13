import React, { useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import { EmployerService } from '../../services/employerService';
import { EmployerRequest } from '../../models/employerRequest';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
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
    <form onSubmit={submitHandler}>
      <div>
        <label>First Name: </label>
        <input
          type='text'
          value={firstName}
          onChange={firstNameChangeHandler}
          name='firstName'
        />
      </div>
      <div>
        <label>Last Name: </label>
        <input
          type='text'
          value={lastName}
          onChange={lastNameChangeHandler}
          name='lastName'
        />
      </div>
      <div>
        <label>Company: </label>
        <input
          type='text'
          value={company}
          onChange={companyChangeHandler}
          name='company'
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type='text'
          value={email}
          onChange={emailChangeHandler}
          name='email'
        />
      </div>
      <div>
        <label>Phone: </label>
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
  );
};

export default UserForm;