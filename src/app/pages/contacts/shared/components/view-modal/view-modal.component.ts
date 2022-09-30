import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IContact } from '../../interfaces/contact.interfaces';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class ViewModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) private data: {contact: IContact}) { }

  get firstName() {
    return this.data?.contact?.firstName;
  }

  get lastName() {
    return this.data?.contact?.lastName;
  }

  get phoneNumber() {
    return this.data?.contact?.phoneNumber;
  }
}
