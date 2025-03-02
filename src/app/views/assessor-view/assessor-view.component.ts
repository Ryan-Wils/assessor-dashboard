import { Component, computed, Directive, inject, input, OnInit, output, signal, ViewChild } from '@angular/core';
import { ChartComponent } from '../../components/bar-chart/bar-chart.component';
import { Assessor, Category } from '../../types/assessor-type';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { AveragesTableComponent } from '../../components/averages-table/averages-table.component';

@Component({
  selector: 'app-assessor-view',
  imports: [ChartComponent, TitleCasePipe, CommonModule, ToolbarComponent, AveragesTableComponent],
  templateUrl: './assessor-view.component.html',
  styleUrls: ['./assessor-view.component.scss'],
})
export class AssessorViewComponent implements OnInit {
  breakpointObserver = inject(BreakpointObserver);

  assessors = input<Assessor[]>([]);
  selectedAssessor = input<Assessor | null>(null);
  categories = input<Category | null>(null);
  setAssesor = output<number>();
  removeAssessor = output<boolean>();

  selectedChartType = signal<'radar' | 'bar' | 'line'>('bar');
  showAssessorView = computed<boolean>(() => this.selectedAssessor() !== null);

  @ViewChild(ChartComponent) barChartCmp: ChartComponent;

  public showContainer: boolean;

  constructor() {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true;
        } else {
          this.showContainer = false;
        }
      });
  }

  public unsetAssessor(): void {
    this.removeAssessor.emit(true);
  }

  public setSelectedAssessor(assessorId: number): void {
    this.setAssesor.emit(assessorId);
    if (!this.barChartCmp) return;
    this.barChartCmp.rerenderChart();
  }

  public toggleSelectedChartType(): void {
    this.selectedChartType.update((chartType) => chartType === 'radar' ? 'bar' : 'radar');
    if (!this.barChartCmp) return;
    this.barChartCmp.rerenderChart();
  }

  public optionSelectChange(e: any): void {
    if (e.target.value === 'Overview') {
      this.removeAssessor.emit(true);
      return;
    }

    if (Number(e.target.value) > 0) {
      this.setSelectedAssessor(Number(e.target.value));
      return;
    }
  }

}
