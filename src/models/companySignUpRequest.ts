export class CompanySignUpRequest {
  public firstName: string;
  public lastName: string;
  public company: string;
  public email: string;
  public phoneNumber: string;
  public companyId: string;
  public companyAdminFirstName: string;
  public companyAdminLastName: string;
  public industry: string;

  constructor(
    first_name: string,
    last_name: string,
    company: string,
    email: string,
    phone: string,
    company_id: string,
    company_admin_first_name: string,
    company_admin_last_name: string,
    industry: string) 
  {
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
