import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts'; // Replace with your API URL

  // Example of a GET request
  async getData(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}`); // Adjust the endpoint
      return response.data;
    } catch (error) {
      console.error('Error fetching data', error);
      throw error; // Rethrow the error for handling in the component
    }
  }

  // Example of a POST request
  async postData(data: any): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}/data`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error sending data', error);
      throw error; // Rethrow the error for handling in the component
    }
  }
}
