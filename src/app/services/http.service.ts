import { Injectable } from '@angular/core';
import { RequestOptions } from '@interfaces/request-options.interface';

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

    return fetch(`https://pokeapi.co/api/v2/${endpoint}`, requestOptions)
      .then((response) => response.json())
      .catch((error) => {
        console.error('An error occurred during the request:', error);
        throw error;
      });
  }
}
