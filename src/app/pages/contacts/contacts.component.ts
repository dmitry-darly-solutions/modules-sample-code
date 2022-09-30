import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, take, takeUntil } from 'rxjs';

import { LayoutService } from 'src/app/shared/services/layout.service';
import { IContact } from './shared/interfaces/contact.interfaces';
import { CreateModalComponent } from './shared/components/create-modal/create-modal.component';
import { DeleteModalComponent } from './shared/components/delete-modal/delete-modal.component';
import { ViewModalComponent } from './shared/components/view-modal/view-modal.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  private destroy$: Subject<void> = new Subject();
  private contacts: IContact[] = [];
  dataSource = new MatTableDataSource(this.contacts);
  displayedColumns: string[] = ['first-name', 'last-name', 'phone-number','view', 'delete'];

  constructor(private layoutService: LayoutService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.layoutService
      .createElement
      .asObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.openCreateDialog());
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateModalComponent, {
      width: '300px',
    });
    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe((data: IContact) => {
        if (!data) return;
        this.contacts.push(data);
        this.dataSource = new MatTableDataSource(this.contacts);
      });
  }

  deleteElement(index: number) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '300px',
    });
    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe((data: string) => {
        if (!data) return;
        this.contacts.splice(index, 1);
        this.dataSource = new MatTableDataSource(this.contacts);
      });
  }

  viewElement(index: number) {
    this.dialog.open(ViewModalComponent, {
      width: '300px',
      data: {contact: this.contacts[index]},
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
