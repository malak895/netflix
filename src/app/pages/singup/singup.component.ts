import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  

  constructor(private router: Router, private http: HttpClient) { }

 
  email: string = '';
  password: string = '';
  isLogin: boolean = true;
  errorMessage: string = "";
  clientStatus: boolean = true; 
  



  login() {
    if ( !this.email || !this.password) {
      alert('Please provide the required information accurately! ');
      return;
    }
    console.log(this.email);
    console.log(this.password);
    let bodyData = {
      email: this.email,
      password: this.password,
    };
    this.http.post("http://localhost:3000/client/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.status) {
        localStorage.setItem('token', resultData.token); 
        this.isLogin = false;
        this.router.navigateByUrl('/home');
      } else {
        this.errorMessage = "Incorrect Email or Password";
        this.clientStatus = false; 
        console.log("Error login");
      }
    });
  }


  ifMethod(myObject: any) {
    if (myObject && myObject.email) {
      
    } else {
      
    }
  }

}
