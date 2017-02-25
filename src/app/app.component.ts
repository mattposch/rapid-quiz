/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'app.component.scss',
    '../../node_modules/primeng/resources/primeng.css',
    '../../node_modules/primeng/resources/themes/omega/theme.css',
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public logo = 'assets/img/lean-coders-logo.png';
  public url = 'http://www.lean-coders.at/';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
