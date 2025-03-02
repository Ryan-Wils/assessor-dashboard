import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-averages-table',
  templateUrl: './averages-table.component.html',
  styleUrls: ['./averages-table.component.scss']
})
export class AveragesTableComponent implements OnInit {
  showContainer = input<boolean>(false);

  constructor() { }

  ngOnInit() {
  }

}
