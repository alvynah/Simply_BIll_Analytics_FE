import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }


  getCurrentUser(){
    return this.http
               .get(`${environment.apiUrl}/api/user/current-user/`,{withCredentials:true})
  }

  createAccount(form, phone_number){
      return this.http
                .post(`${environment.apiUrl}/api/create-new-account/${phone_number}/`,form)
  }

  getAccountDetails(phone_number){
    return this.http
               .get(`${environment.apiUrl}/api/get-account-details/${phone_number}/`)
  }
}
