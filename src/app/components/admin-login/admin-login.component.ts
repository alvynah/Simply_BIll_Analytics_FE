import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,ReactiveFormsModule , Validators , FormControl} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  form! : FormGroup ;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email:"",
      password:"",
    });
  }

  submit(): void{
    this.http.post('http://localhost:8000/api/user/login/',this.form.getRawValue(),
    {withCredentials:true})
    .subscribe(
      response => {
        console.log(response)
        
        this.router.navigateByUrl('adminverify');
      },
      error => console.log('error', error)
    ); 
  }

}
