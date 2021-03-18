import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgoService } from '../ngoService';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {

  public event = [];
  public errorMsg;

  constructor(private router:Router, private _ngoService:NgoService, private route:ActivatedRoute) { }

  ngOnInit() {
   this._ngoService.getEvent().subscribe(
     data => {this.event = data;
              console.log(data)},
     error => this.errorMsg = error
   )
  }


}
