import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsHomeComponent } from './contact-us-home/contact-us-home.component';

const routes: Routes = [
  {
    path: '',
    component: ContactUsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUsRoutingModule {}
