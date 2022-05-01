import { AxiosInstance, AxiosResponse } from 'axios';
import { CompanySignUpRequest } from '../models/companySignUpRequest';
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
   * @param companySignUpRequest
   * @returns Axios Response containing the created company id
   */
  public registerCompany = (companySignUpRequest: CompanySignUpRequest): Promise<AxiosResponse<string>> => {
    return this.http.post('/employer', companySignUpRequest);
  };

  /**
   * Makes a request to the backend to create an employer
   * 
   * @param employerSignUpRequest 
   * @returns 
   */
  public signup = (employerSignUpRequest: EmployerSignUpRequest) => {
    return this.http.post('/employer/signup', employerSignUpRequest);
  };
}
