import { NgModule } from '@angular/core/src/metadata/ng_module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuizComponent } from './quiz.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import quizRoutes from './quiz.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    quizRoutes,
  ],
  declarations: [QuizComponent, Page1Component, Page2Component]
})
export default class QuizModule {}
