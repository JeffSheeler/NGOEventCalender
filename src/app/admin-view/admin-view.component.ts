import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSelectEvent(){
    this.router.navigate(['/adminView/eventManagement'])
  }
  onSelectUser(){
    this.router.navigate(['/adminView/userManagement'])
  }
  onSelectUserView(){
    this.router.navigate(['/adminView/userView'])
  }


}
