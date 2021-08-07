import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutHomeComponent } from './about-home/about-home.component';

@NgModule({
  declarations: [AboutHomeComponent],
  imports: [CommonModule, AboutUsRoutingModule, MatIconModule],
})
export class AboutUsModule {}
