import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../user';
import { UserService } from '../userservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;
  public loginForm:FormGroup;

  constructor(private fb:FormBuilder, private route:ActivatedRoute, private _userService:UserService, private router:Router) { }

  ngOnInit() {

      this.loginForm = this.fb.group({
        email:['', Validators.required],
        password:['',Validators.required]
      })


  }

  onSubmit(){
    this._userService.login(this.loginForm.value).subscribe(
      response => {console.log(response)
                    localStorage.setItem("token", response.token);
                    let token = localStorage.getItem("token");
                    let payload = atob(token.split('\.')[1]);
                    this.user = JSON.parse(payload);
                    console.log(this.user)
                    if(this.user.role == "user"){
                        this.router.navigate(['/userView']);
                    }else if(this.user.role == "admin"){
                        this.router.navigate(['/adminView']);
                    }

                  }
    )
    
  }
}
