import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Emitters } from 'src/app/emitters/emitters';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authenticated= false;

  constructor(
                private http:HttpClient, 
                private router:Router,
                private toastr:ToastrService,
                private authenticationService:AuthenticationService
              ) { }

  ngOnInit():void{
        // Emitters.authEmitter.subscribe(
        //                (res:boolean) => 
        //                        {
        //                          this.authenticated=res
        //                         // console.log(res);
                                
        //                        }              
        // )    
        this.authenticationService.currentUser.subscribe(x => this.authenticated = x);
  }


  
  logout ():void{

        let cancel=confirm("Do you really want to Logout"); 


        if(cancel){
          this.authenticationService
            .logout()
            .subscribe(
                  response =>{
                    
                    this.authenticated = false;

                    this.toastr.success('Successful Logout')

                    // this.router.navigateByUrl('/userlogin');
                    location.reload();

                  },
                  error=>{
                       console.log(error);
                       this.toastr.error('Unsuccessful Logout')
                  }
              
              )

            // this.http
            // .post('http://localhost:8000/logout/',{},{withCredentials:true})
            // .subscribe(
            //   response =>{
                
            //     this.authenticated = false;

            //     this.toastr.success('Successful Logout')

            //     this.router.navigateByUrl('/');

            //   })


        }

      
    }

}
