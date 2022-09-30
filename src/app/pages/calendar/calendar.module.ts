import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarComponent } from './calendar.component';
import { CreateModalComponent } from './shared/components/create-modal/create-modal.component';
import { ViewModalComponent } from './shared/components/view-modal/view-modal.component';
import { DeleteModalComponent } from './shared/components/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CreateModalComponent,
    ViewModalComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarComponent,
      },
    ]),
  ]
})
export class CalendarModule { }
