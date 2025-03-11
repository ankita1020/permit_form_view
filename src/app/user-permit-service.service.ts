import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface County {
  countyId: number;
  countyName: string;
}

export interface PermitType {
  permitTypeId: number;
  permitTypeName: string;
}

export interface FormData {
  username: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  countyId: number;
  permitTypeId: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserPermitServiceService {

  private apiUrl = 'http://localhost:5174/api/permit'; // Replace with your backend URL
  /* private countiesApiUrl = 'https://example.com/api/counties'; // Replace with your backend API URL
  private permitTypesApiUrl = 'https://example.com/api/permit-types'; // Replace with your backend API URL */


    constructor(private http: HttpClient) {}

    // Fetch county list
      getCounties(): Observable<County[]> {
        return this.http.get<County[]>(`${this.apiUrl}/counties`);
      }

      // Fetch permit type list
      getPermitTypes(): Observable<PermitType[]> {
        return this.http.get<PermitType[]>(`${this.apiUrl}/permittypes`);
      }

    // Method to send form data to backend
    submitForm(data: FormData): Observable<any> {
      return this.http.post(`${this.apiUrl}/submit`, data);
      }
}
