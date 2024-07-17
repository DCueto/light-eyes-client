import { Component, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ChecklistCardComponent } from "../../components/checklist-card/checklist-card.component";
import { Checklist } from 'app/shared/models/checklist';
import { ChecklistService } from 'app/checklist/services/checklist.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-checklist',
  standalone: true,
  imports: [MatButtonModule, MatIcon, ChecklistCardComponent, AsyncPipe],
  templateUrl: './list-checklist.component.html',
  styleUrl: './list-checklist.component.scss'
})
export class ListChecklistComponent implements OnInit {

  checklists!: Observable<Checklist[]>
  private checklistService = inject(ChecklistService)

  ngOnInit(): void {

    this.checklists = this.checklistService.getAllChecklist();
    
  }

}
