import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { MailComponent } from './mail.component';
import { CreateModalComponent } from './shared/components/create-modal/create-modal.component';
import { ViewModalComponent } from './shared/components/view-modal/view-modal.component';
import { DeleteModalComponent } from './shared/components/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    MailComponent,
    CreateModalComponent,
    ViewModalComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MailComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MailModule { }
