import { Component, OnInit } from '@angular/core';
import { NgoService } from '../ngoService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  public event = [];
  public errorMsg;

  constructor(private _ngoService: NgoService, private router:Router) { 
    
  }

  ngOnInit() {
      this._ngoService.getEvent().subscribe(
        (data) => this.event = data,
        (error) => this.errorMsg = error
      )
  }

  onSelect(eventId){
     this.router.navigate(['/eventInfo', eventId])
  }

}
