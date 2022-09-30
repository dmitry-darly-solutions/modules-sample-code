import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, take, takeUntil } from 'rxjs';

import { LayoutService } from 'src/app/shared/services/layout.service';
import { CreateModalComponent } from './shared/components/create-modal/create-modal.component';
import { DeleteModalComponent } from './shared/components/delete-modal/delete-modal.component';
import { ViewModalComponent } from './shared/components/view-modal/view-modal.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  private destroy$: Subject<void> = new Subject();
  private dates: string[] = [];
  dataSource = new MatTableDataSource(this.dates);
  displayedColumns: string[] = ['date', 'view', 'delete'];

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
      .subscribe((data: string) => {
        if (!data) return;
        this.dates.push(data);
        this.dataSource = new MatTableDataSource(this.dates);
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
        this.dates.splice(index, 1);
        this.dataSource = new MatTableDataSource(this.dates);
      });
  }

  viewElement(index: number) {
    this.dialog.open(ViewModalComponent, {
      width: '300px',
      data: {date: this.dates[index]},
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
