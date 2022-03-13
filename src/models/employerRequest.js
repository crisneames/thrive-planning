export class EmployerRequest {
  firstName;
  lastName;
  company;
  email;
  phoneNumber;
  companyId;
  companyAdminFirstName;
  companyAdminLastName;
  industry;

  constructor(
    first_name,
    last_name,
    company,
    email,
    phone,
    company_id,
    company_admin_first_name,
    company_admin_last_name,
    industry
  ) {
    this.firstName = first_name;
    this.lastName = last_name;
    this.company = company;
    this.email = email;
    this.phoneNumber = phone;
    this.companyId = company_id;
    this.companyAdminFirstName = company_admin_first_name;
    this.companyAdminLastName = company_admin_last_name;
    this.industry = industry;
  }
}
