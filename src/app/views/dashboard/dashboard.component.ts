import { Component, effect, inject, input, OnInit, signal, ViewChild } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { AssessorViewComponent } from '../assessor-view/assessor-view.component';
import { Assessor } from '../../types/assessor-type';

@Component({
  selector: 'app-dashboard',
  imports: [AssessorViewComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  campaigns = inject(MockDataService).getCampaigns();
  selectedCampaign = signal(this.campaigns[0]);

  exerciseAverages = inject(MockDataService).getExerciseAverages();
  selectedExerciseAverages = signal(this.exerciseAverages[0]);

  assessors = inject(MockDataService).getAssessorData();
  selectedAssessor = signal<Assessor | null>(null);

  constructor() {
  }

  ngOnInit() {
  }

  public setAssesor(assessorId: number | null): void {
    if (!assessorId) {
      this.selectedAssessor.set(null);
      return;
    }
    const assessorPos = this.assessors.findIndex((assessor) => assessor.assessorId === assessorId);
    this.selectedAssessor.set(this.assessors[assessorPos]);
  }

  public unsetAssessor(): void {
    this.selectedAssessor.set(null);
  }

}
