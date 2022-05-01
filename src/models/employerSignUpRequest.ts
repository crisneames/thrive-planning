export class EmployerSignUpRequest {
  firstName;
  lastName;
  email;
  phone;
  userName;
  password;
  public companyId: string;

  constructor(
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    user_name: string,
    password: string,
    company_id: string
  ) {
    this.firstName = first_name;
    this.lastName = last_name;
    this.email = email;
    this.phone = phone;
    this.userName = user_name;
    this.password = password;
    this.companyId = company_id;
  }
}
