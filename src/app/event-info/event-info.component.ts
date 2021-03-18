import { Component, OnInit } from '@angular/core';
import { NgoService } from '../ngoService';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  public eventId;
  public event;
  public errorMsg;

  constructor(private _ngoService:NgoService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params:ParamMap)=>{
        let id = params.get('eventId');
        this.eventId = id;
      }
    );

    this._ngoService.getEventId(this.eventId).subscribe(
      (data) => this.event = data,
      (error) => this.errorMsg = error
    );

    console.log(this.eventId)
  }

  onSelect(){
    this.router.navigate(['/eventRegistration']);
  }

}
