export class EmployerRequest {
  firstName;
  lastName;
  email;
  phone;
  userName;
  password;

  constructor(first_name, last_name, email, phone, user_name, password) {
    this.firstName = first_name;
    this.lastName = last_name;
    this.email = email;
    this.phone = phone;
    this.userName = user_name;
    this.password = password;
  }
}
