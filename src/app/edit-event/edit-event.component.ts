import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgoService } from '../ngoService';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  public eventId;
  public event;
  public errorMsg;

  public eventEditForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private _ngoService: NgoService) { }

  ngOnInit() {
    this.eventEditForm = this.fb.group({
      name:['',],
      description:['',],
      category:['',],
      location:['',],
      startDate:['',],
      endDate:['',],
      startTime:['',],
      endTime:['',],
      allowRegistration:['',],
      eventImage:['',],
      adultTicket:['',],
      childTicket:['',]
    })


    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = (params.get('eventId'));
      this.eventId = id;
    });

    this._ngoService.getEventId(this.eventId).subscribe(
      (data) => {this.event = data;
                this.eventEditForm.setValue({name:this.event.name, 
                                            description:this.event.description, 
                                            category:this.event.category,
                                            location:this.event.location, 
                                            startDate:this.event.startDate, 
                                            endDate:this.event.endDate,
                                            startTime:this.event.startTime, 
                                            endTime:this.event.endTime, 
                                            allowRegistration:this.event.allowRegistration,
                                            eventImage:this.event.eventImage,
                                            adultTicket:this.event.adultTicket, 
                                            childTicket:this.event.childTicket});
                },
      (error) => this.errorMsg = error
    );
  }

  onSubmit() {
    console.log(this.eventEditForm.value);
    this._ngoService.editEvent(this.eventEditForm.value, this.eventId).subscribe(
        response => {console.log('Success!', response)
                    this.router.navigate(['../../eventManagement'], {relativeTo:this.route});  
                    },
        error => console.error('Error!', error));
    }

}
