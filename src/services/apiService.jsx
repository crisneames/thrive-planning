//apiServices is a base class that can be utilized by other services
//employerService is specifically for utilizing the apiService.getAxiosInstance

// import { API_BASE } from '@env'
import axios, { AxiosInstance } from 'axios';

export class ApiService {
  constructor(bearer = undefined) {
    this.API_BASE = 'http://localhost';
  }

  getAxiosInstance = () => {
    let axiosInstance = axios.create({
      baseURL: this.API_BASE, //localhost
      headers: {
        'Content-type': 'application/json',
      },
    });

    return axiosInstance;
  };
}
