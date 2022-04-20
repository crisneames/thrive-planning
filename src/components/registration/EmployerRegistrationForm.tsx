import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useMemo,
  useState,
} from "react";
import { Button, Card } from "react-bootstrap";
import { EmployerService } from "../../services/employerService";
import { EmployerRequest } from "../../models/employerRequest";
import CompanyTypesSelect from "../CompanyTypesSelect";

const EmployerRegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [companyAdminFirstName, setCompanyAdminFirstName] = useState("");
  const [companyAdminLastName, setCompanyAdminLastName] = useState("");
  const [industry, setIndustry] = useState("");

  const employerService = useMemo(() => new EmployerService(), []);

  const firstNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const companyChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const phoneChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const companyIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanyId(event.target.value);
  };

  const companyAdminFirstNameChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setCompanyAdminFirstName(event.target.value);
  };

  const companyAdminLastNameChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setCompanyAdminLastName(event.target.value);
  };

  const industryChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIndustry(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let employerRequest = new EmployerRequest(
      firstName,
      lastName,
      company,
      email,
      phone,
      companyId,
      companyAdminFirstName,
      companyAdminLastName,
      industry
    );
    employerService
      .register(employerRequest)
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
      <h1 className="text-center font-face-gm">Employer Registration</h1>
      <Card style={{ width: "30rem", margin: "0 auto" }}>
        <form onSubmit={submitHandler}>
          <div className="form-group px-2 font-face-gm">
            <label>
              <b>First Name</b>
            </label>
            <input
              className="form-control"
              placeholder="Enter contact first name"
              type="text"
              value={firstName}
              onChange={firstNameChangeHandler}
              name="firstName"
            />
          </div>
          <div className="form-group px-2 font-face-gm">
            <label>
              <b>Last Name</b>
            </label>
            <input
              className="form-control"
              placeholder="Enter contact last name"
              type="text"
              value={lastName}
              onChange={lastNameChangeHandler}
              name="lastName"
            />
          </div>
          <div className="form-group px-2 font-face-gm">
            <label>
              <b>Email</b>
            </label>
            <input
              className="form-control"
              placeholder="Enter contact email"
              type="email"
              value={email}
              onChange={emailChangeHandler}
              name="email"
            />
          </div>
          <div className="form-group px-2 font-face-gm">
            <label>
              <b>Phone</b>
            </label>
            <input
              className="form-control"
              placeholder="Enter contact phone number"
              type="tel"
              value={phone}
              onChange={phoneChangeHandler}
              name="phone"
            />
          </div>
          <div className="form-group px-2 font-face-gm">
            <label>
              <b>Company Name</b>
            </label>
            <input
              className="form-control"
              placeholder="Enter company name"
              type="text"
              value={company}
              onChange={companyChangeHandler}
              name="company"
            />
          </div>
          <div className="form-group px-2 font-face-gm">
            <label>
              <b>Company ID</b>
            </label>
            <input
              className="form-control"
              placeholder="Enter Company ID (Employer Tax ID)"
              type="text"
              value={companyId}
              onChange={companyIdChangeHandler}
              name="companyId"
            />
          </div>
          <div className="form-group px-2 font-face-gm">
            <label>
              <b>Company Admin First Name</b>
            </label>
            <input
              className="form-control"
              placeholder="Enter company admin first name"
              type="text"
              value={companyAdminFirstName}
              onChange={companyAdminFirstNameChangeHandler}
              name="companyAdminFirstName"
            />
          </div>
          <div className="form-group px-2 font-face-gm">
            <label>
              <b>Company Admin Last Name</b>
            </label>
            <input
              className="form-control"
              placeholder="Enter company admin last name"
              type="text"
              value={companyAdminLastName}
              onChange={companyAdminLastNameChangeHandler}
              name="companyAdminLastName"
            />
          </div>
          <div className="form-group pb-4 px-2 font-face-gm">
            <label>
              <b>Industry</b>
            </label>
            <CompanyTypesSelect
              onHandleChange={(event: ChangeEvent<HTMLSelectElement>) =>
                setIndustry(event.target.value)
              }
            />
          </div>
          <div className="text-center pb-2 font-face-gm">
            <Button style={{ width: "26rem" }} type="submit">
              Register
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default EmployerRegistrationForm;
