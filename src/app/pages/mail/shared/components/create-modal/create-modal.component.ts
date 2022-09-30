import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  email = '';

  constructor() { }

  ngOnInit(): void {
  }

}
