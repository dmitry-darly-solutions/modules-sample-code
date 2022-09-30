import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class ViewModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) private data: {date: string}) { }

  get date() {
    return this.data?.date;
  }
}
