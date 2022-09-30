import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './shared/components/page-layout/page-layout.component';

const routes: Routes = [
  {
    path: 'mail',
    component: PageLayoutComponent,
    loadChildren: () => import('./pages/mail/mail.module').then(m => m.MailModule),
  },
  {
    path: 'contacts',
    component: PageLayoutComponent,
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
  },
  {
    path: 'calendar',
    component: PageLayoutComponent,
    loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule),
  },
  {
    path: '**',
    redirectTo: '/mail'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
