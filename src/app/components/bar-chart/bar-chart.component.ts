import { ChangeDetectionStrategy, Component, computed, input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Section } from '../../types/assessor-type';

@Component({
  selector: 'app-chart',
  imports: [BaseChartDirective],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  chartType = input<'radar' | 'bar' | 'line'>('bar');
  chartSections = input<Section[]>([]);

  average = computed<number>(() => {
    return this.chartSections().reduce((acc, section) => acc + section.assessorData.value, 0) / this.chartSections().length;
  });

  public chartData: ChartConfiguration<'radar' | 'bar' | 'line'>['data'] = {
    labels: [],
    datasets: [],
  };

  public chartOptions: ChartConfiguration<'radar' | 'bar' | 'line'>['options'] = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        min: 0,
        max: 5,
      },
    },
  };

  constructor() {
  }

  ngOnInit() {
    this._updateChartData();
  }

  public rerenderChart(): void {
    this._updateChartData();
  }

  private _updateChartData(): void {
    this.chartData = {
      labels: this.chartSections().map((section) => section.sectionName),
      datasets: [{
          data: this.chartSections().map((section) => section.assessorData.value),
          label: "Actual",
      },
      {
          data: [this.average(),this.average(),this.average(),this.average(),this.average()],
          label: "Average",
          type: this.chartType() === 'radar' ? 'radar' : "line",
      }],
    };
    this.chartOptions = {
      ...this.chartOptions,
      scales: {
        x: {
          min: 0,
          max: 5,
          display: this.chartType() !== 'radar',
        }
      }
    }
    this.chart?.update();
  }

}
