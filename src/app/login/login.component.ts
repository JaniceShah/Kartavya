import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cmxform: FormGroup;
  errorMessage = '';
  
  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  
  createForm() {
    this.cmxform = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

}
