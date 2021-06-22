import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule  , Validators , FormControl} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {
  
  form! : FormGroup ;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) { }

  // ngOnInit(): void {
  //   this.form = this.formBuilder.group({
  //     first_name: '',
  //     last_name : '',
  //     email:'',
  //     phone_number:'',
  //     password:'',
  //     username:'',
  //   }); 
  // }


  ngOnInit(): void {
    this.form =new FormGroup({
      first_name:new FormControl('', [Validators.required]),
      last_name:new FormControl('', [Validators.required]),
      username:new FormControl('', [Validators.required]),
      phone_number:new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
      });
    }
  submit(): void{
    this.http.post('http://localhost:8000/api/admin/register/',this.form.getRawValue()).subscribe(response =>{console.log(response)
      alert("You have been Successfully Registered")
      this.router.navigateByUrl('/adminlogin');
    })
  }

}
