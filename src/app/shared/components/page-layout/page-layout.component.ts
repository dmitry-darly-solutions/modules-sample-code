import { Component, OnInit } from '@angular/core';

import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent {

  constructor(private layoutService: LayoutService) { }

  create() {
    this.layoutService.createElement.next();
  }
}
