import { AxiosInstance } from 'axios';
import { EmployerRequest } from '../models/employerRequest';
import { EmployerSignUpRequest } from '../models/employerSignUpRequest';
import { ApiService } from './apiService';

export class EmployerService {
  private apiService: ApiService;
  private http: AxiosInstance;

  constructor() {
    this.apiService = new ApiService();
    this.http = this.apiService.getAxiosInstance();
  }

  /**
   * Makes a request to the backend to create a company
   *
   * @param employerRequest
   * @returns
   */
  public register = (employerRequest: EmployerRequest) => {
    console.log(employerRequest);
    return this.http.post('/employer', employerRequest);
  };
  signup = (employerSignUpRequest: EmployerSignUpRequest) => {
    console.log(employerSignUpRequest);
    return this.http.post('/employer/signup', employerSignUpRequest);
  };
}
