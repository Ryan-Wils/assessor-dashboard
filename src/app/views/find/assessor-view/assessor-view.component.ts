import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ChartComponent } from '../../../components/bar-chart/bar-chart.component';
import { Assessor, Category } from '../../../types/assessor-type';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ToolbarComponent } from '../../../components/toolbar/toolbar.component';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../../../services/mock-data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointService } from '../../../services/breakpoint.service';

@Component({
  selector: 'app-assessor-view',
  imports: [ChartComponent, TitleCasePipe, CommonModule, ToolbarComponent],
  templateUrl: './assessor-view.component.html',
  styleUrls: ['./assessor-view.component.scss'],
})
export class AssessorViewComponent implements OnInit {
  showContainer = inject(BreakpointService).showContainer;
  route: ActivatedRoute = inject(ActivatedRoute);

  assessors = toSignal(inject(MockDataService).getAssessorData());

  selectedChartType = signal<'radar' | 'bar' | 'line'>('bar');
  selectedAssessor = signal<Assessor | null>(null);

  @ViewChild(ChartComponent) barChartCmp: ChartComponent;

  constructor() { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.assessors()?.forEach((assessor) => {
        if (assessor.assessorId === +params['id']) {
          this.selectedAssessor.set(assessor);
        }
      });
    });
  }

  public trackBy(category: Category): number {
    return this.selectedAssessor()?.categoryData.indexOf(category) ?? 0;
  }

  public toggleSelectedChartType(): void {
    this.selectedChartType.update((chartType) => chartType === 'radar' ? 'bar' : 'radar');
    if (!this.barChartCmp) return;
    this.barChartCmp.rerenderChart();
  }

}
