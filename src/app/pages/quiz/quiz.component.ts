import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AppState } from '../../app.service';

@Component({
  selector: 'quiz',
  styleUrls: [ 'quiz.component.scss' ],
  templateUrl: './quiz.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class QuizComponent {

  public pages = [
    {path: '/page1', title: 'Page 1', color: 'red'},
    {path: '/page2', title: 'Page 2', color: 'green'},
  ];

  public questions = [
    { id: 1, text: 'Lorem ipsum', answers: [
      { id: 1, text: 'Option 1'},
      { id: 2, text: 'Option 2'},
      { id: 3, text: 'Option 3'},
      { id: 4, text: 'Option 4'},
    ]},
    { id: 2, text: 'Lorem ipsum', answers: [
      { id: 1, text: 'Option 1'},
      { id: 2, text: 'Option 2'},
      { id: 3, text: 'Option 3'},
      { id: 4, text: 'Option 4'},
    ]},
    { id: 3, text: 'Lorem ipsum', answers: [
      { id: 1, text: 'Option 1'},
      { id: 2, text: 'Option 2'},
      { id: 3, text: 'Option 3'},
      { id: 4, text: 'Option 4'},
    ]},
    { id: 4, text: 'Lorem ipsum', answers: [
      { id: 1, text: 'Option 1'},
      { id: 2, text: 'Option 2'},
      { id: 3, text: 'Option 3'},
      { id: 4, text: 'Option 4'},
    ]},
    { id: 5, text: 'Lorem ipsum', answers: [
      { id: 1, text: 'Option 1'},
      { id: 2, text: 'Option 2'},
      { id: 3, text: 'Option 3'},
      { id: 4, text: 'Option 4'},
    ]},
    { id: 6, text: 'Lorem ipsum', answers: [
      { id: 1, text: 'Option 1'},
      { id: 2, text: 'Option 2'},
      { id: 3, text: 'Option 3'},
      { id: 4, text: 'Option 4'},
    ]},
    { id: 7, text: 'Lorem ipsum', answers: [
      { id: 1, text: 'Option 1'},
      { id: 2, text: 'Option 2'},
      { id: 3, text: 'Option 3'},
      { id: 4, text: 'Option 4'},
    ]},
    { id: 8, text: 'Lorem ipsum', answers: [
      { id: 1, text: 'Option 1'},
      { id: 2, text: 'Option 2'},
      { id: 3, text: 'Option 3'},
      { id: 4, text: 'Option 4'},
    ]},
    { id: 9, text: 'Lorem ipsum', answers: [
      { id: 1, text: 'Option 1'},
      { id: 2, text: 'Option 2'},
      { id: 3, text: 'Option 3'},
      { id: 4, text: 'Option 4'},
    ]},
    { id: 10, text: 'Lorem ipsum', answers: [
      { id: 1, text: 'Option 1'},
      { id: 2, text: 'Option 2'},
      { id: 3, text: 'Option 3'},
      { id: 4, text: 'Option 4'},
    ]},
  ];

  public currentQuestion;

  public lastQuestionReached: boolean = false;
  public currentQuestionIndex: number = 1;
  public currentAnswers = [];
  public checked = false;

  constructor (
    public appState: AppState,
    public router: Router
  ) {
    this.currentQuestion = this.questions[0];
  }

  public next() {
    this.appState.get('answers').push(this.currentQuestion);

    ++this.currentQuestionIndex;

    const nextQuestionIndex =
      this.arrayObjectIndexOf(this.questions, this.currentQuestion) + 1;

    if (nextQuestionIndex === this.questions.length - 1) {
      this.lastQuestionReached = true;
    }
    this.currentQuestion = this.questions[nextQuestionIndex];
  }

  public finish() {
    this.router.navigateByUrl('/result');
  }

  private arrayObjectIndexOf = (array, needle) => {
    for (let i = 0, len = array.length; i < len; i++) {
      if (array[i].id === needle.id) {
        return i;
      }
    }
    return -1;
  }
}
