import { Component, OnInit } from '@angular/core';
import { UserService } from '../userservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  public user = [];
  public errorMsg;
  public token;

  constructor(private _userService: UserService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._userService.getUser().subscribe(
      (data) => this.user = data,
      (error) => this.errorMsg = error
    );

    let item = localStorage.getItem("token");
    let payload = atob(item.split('\.')[1]);
    this.token = JSON.parse(payload);
  }

}
