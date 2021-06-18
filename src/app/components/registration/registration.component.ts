import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup ;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    ){ 
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name : '',
      email:'',
      phone_number:'',
      password:'',
      username:'',
    }); 
  }
 
submit(): void{
  this.http.post('https://localhost:8000/api/user/register/',this.form.getRawValue())
    .subscribe(response =>{console.log(response)
    alert("Simply Bill Analyics Succesfully Registered")
    this.router.navigateByUrl('/login');
  })
}

}
