export class EmployerRequest {
    firstName
    lastName
    email
    phoneNumber
    company

    constructor(first_name, last_name, email, phone, company){
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.phoneNumber = phone;
        this.company = company;
    }
}