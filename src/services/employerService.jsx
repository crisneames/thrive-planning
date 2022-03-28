import { ApiService } from './apiService';

export class EmployerService {
  constructor() {
    this.apiService = new ApiService();
    this.http = this.apiService.getAxiosInstance();
  }

  register = (employer) => {
    console.log(employer);
    return this.http.post('/employer', employer);
  };

  signup = (employerSignUpRequest) => {
    console.log(employerSignUpRequest);
    return this.http.post('/employer/signup', employerSignUpRequest);
  };
}
