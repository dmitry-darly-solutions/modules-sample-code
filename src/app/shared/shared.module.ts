import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { PageLayoutComponent } from './components/page-layout/page-layout.component';

const Modules = [
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  declarations: [
    PageLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ...Modules,
    RouterModule,
  ],
  exports: [...Modules],
})
export class SharedModule {
}
