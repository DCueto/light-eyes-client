import { Component, ViewContainerRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GeneratorChecklistService } from 'app/checklist/services/generator-checklist.service';
import { CommonModule } from '@angular/common';
import { ChecklistAnswerComponent } from "../checklist-answer/checklist-answer.component";
@Component({
  selector: 'app-checklist-question',
  standalone: true,

  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, ChecklistAnswerComponent,  MatButton, MatButtonModule],

  templateUrl: './checklist-question.component.html',
  styleUrl: './checklist-question.component.scss'
})
export class ChecklistQuestionComponent {

addtionalQuestions: number[] = [];

public questionCounter = 1;


 signselectors= [
    {value: 'affirmative-3', viewValue: 'Yes'},
    {value: 'negative-4', viewValue: 'No'},
 
  ]

  constructor (private viewContainerRef: ViewContainerRef){
  }
  addNewAnswer(){
    this.viewContainerRef.createComponent(ChecklistAnswerComponent)
  }

  addNewQuestion(){
    if (this.questionCounter === 1){
      this.viewContainerRef.createComponent(ChecklistQuestionComponent); 
      this.addtionalQuestions.push(this.questionCounter);

    }
    this.questionCounter++;
  }

  // answers: any[] = [];
  // showAnswerForm = false;

  // constructor(private answerService: GeneratorChecklistService) {
  //   this.answerService.answers$.subscribe((answers: any[]) => this.answers = answers);
  // }

  // openNewAnswer() {
  //   this.showAnswerForm = true;
  // }

  // addAnswer(answer: any) {
  //   this.answerService.addAnswer(answer);
  //   this.showAnswerForm = false;
  // }

}