import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReportService } from 'app/report/services/report.service';
import { Observable } from 'rxjs';
import { Report } from 'app/shared/models/reports';
import { ReportTableComponent } from "../../components/report-table/report-table.component";

@Component({
  selector: 'app-list-report',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatCardModule, ReportTableComponent],
  templateUrl: './list-report.component.html',
  styleUrl: './list-report.component.scss'
})
export class ListReportComponent implements OnInit{

reports!: Observable<Report[]>
private reportService = inject(ReportService)

ngOnInit(): void {

  this.reports = this.reportService.getAllReport();
}

}
