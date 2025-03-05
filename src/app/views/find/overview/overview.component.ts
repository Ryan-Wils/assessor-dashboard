import { Component, inject, OnInit } from '@angular/core';
import { AveragesTableComponent } from '../../../components/averages-table/averages-table.component';
import { ToolbarComponent } from '../../../components/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { BreakpointService } from '../../../services/breakpoint.service';
import { MockDataService } from '../../../services/mock-data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { OverviewStatsComponent } from '../../../components/overview-stats/overview-stats.component';

@Component({
  selector: 'app-overview',
  imports: [AveragesTableComponent, ToolbarComponent, OverviewStatsComponent, CommonModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  showContainer = inject(BreakpointService).showContainer;
  mockDataSvc = inject(MockDataService);
  exerciseAverages = toSignal(this.mockDataSvc.getExerciseAverages());

  constructor() { }

  ngOnInit() {
  }

}
