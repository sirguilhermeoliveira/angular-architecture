import { Injectable } from '@angular/core';
import { RequestOptions } from '@interfaces/request-options.interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  fetchWithHeaders(endpoint: string, method = 'GET', options: RequestOptions = {}): Promise<any> {
    const headers = {
      'Content-Type': 'application/json'
    };

    const requestOptions: RequestOptions = {
      ...options,
      method,
      headers: {
        ...options.headers,
        ...headers
      }
    };

    return fetch(`${environment.API_URL}${endpoint}`, requestOptions)
      .then((response) => response.json())
      .catch((error) => {
        console.error('An error occurred during the request:', error);
        throw error;
      });
  }
}
