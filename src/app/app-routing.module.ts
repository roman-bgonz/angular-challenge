import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactReactiveComponent } from './components/contact-reactive/contact-reactive.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserComponent } from './users/user/user.component';
import { ListComponent } from './users/list/list.component';
import { DetailsComponent } from './users/details/details.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { WithoutSaveGuard } from './guards/without-save.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact-template', component: ContactComponent, pathMatch: 'full' },
  { path: 'contact-template/:id', component: ContactComponent },
  {
    path: 'contact-reactive',
    component: ContactReactiveComponent,
    canDeactivate: [WithoutSaveGuard],
  },
  {
    path: 'users',
    canActivate: [PermissionsGuard],
    component: UserComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'details', component: DetailsComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
