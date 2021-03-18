import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName:[''],
      lastName:[''],
      username:[''],
      password:[''],
    })
  }

  onSubmit(){
    console.log(this.registrationForm.value);
  }

}
