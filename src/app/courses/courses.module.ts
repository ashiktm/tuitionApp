import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseHomeComponent } from './course-home/course-home.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CourseHomeComponent],
  imports: [CommonModule, CoursesRoutingModule, MatCardModule],
})
export class CoursesModule {}
