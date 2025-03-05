import { Component, inject, OnInit, signal } from '@angular/core';
import { MockDataService } from '../../../services/mock-data.service';
import { Assessor } from '../../../types/assessor-type';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointService } from '../../../services/breakpoint.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  router = inject(Router);
  showContainer = inject(BreakpointService).showContainer;
  mockDataSvc = inject(MockDataService);

  assessors = toSignal(this.mockDataSvc.getAssessorData());
  selectedAssessor = signal<Assessor | null>(null);

  constructor() {
  }

  ngOnInit() {
  }

  public optionSelectChange(e: any): void {
    if (e.target.value === 'Overview') {
      this.router.navigate(['overview']);
    }
    if (Number(e.target.value) > 0) {
      this.router.navigate(['assessor', Number(e.target.value)]);
      return;
    }
  }

  public navigateOverview(): void {
    this.router.navigate(['overview']);
  }

}
