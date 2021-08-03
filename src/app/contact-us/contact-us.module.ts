import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsHomeComponent } from './contact-us-home/contact-us-home.component';

@NgModule({
  declarations: [ContactUsHomeComponent],
  imports: [CommonModule, ContactUsRoutingModule, MatIconModule],
})
export class ContactUsModule {}
