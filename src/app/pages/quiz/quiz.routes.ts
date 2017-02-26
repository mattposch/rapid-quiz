import { RouterModule } from '@angular/router';

import { QuizComponent } from './quiz.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes = [
  {path: '', component: QuizComponent,
    children: [
      {path: 'page1', component: Page1Component},
      {path: 'page2', component: Page2Component},
    ]},
];

export default RouterModule.forChild(routes);
