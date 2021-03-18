import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgoService } from '../ngoService';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  public eventAddForm:FormGroup
  constructor(private fb:FormBuilder, private router:Router, private _ngoService:NgoService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.eventAddForm = this.fb.group({
      name:[''],
      description:[''],
      category:[''],
      location:[''],
      startDate:[''],
      endDate:[''],
      startTime:[''],
      endTime:[''],
      allowRegistration:[''],
      eventImage:[''],
      adultTicket:[''],
      childTicket:['']

    })
  }

  onSubmit(){
    this._ngoService.addEvent(this.eventAddForm.value).subscribe(
      response => {console.log('Success!', response);
                  this.router.navigate(['../eventManagement'], {relativeTo:this.route})},
      error => console.error('Error!', error)
    );

    

  }

}
