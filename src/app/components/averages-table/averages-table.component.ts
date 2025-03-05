import { Component, input, OnInit } from '@angular/core';
import { ExerciseAverage } from '../../types/assessor-type';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-averages-table',
  imports: [TitleCasePipe ],
  templateUrl: './averages-table.component.html',
  styleUrls: ['./averages-table.component.scss']
})
export class AveragesTableComponent implements OnInit {
  showContainer = input<boolean>(false);
  exerciseAverages = input<ExerciseAverage[]>();

  constructor() { }

  ngOnInit() {
  }

}
