import { Injectable, signal } from '@angular/core';
import { campaignData } from './mock-data';
import { Observable, of } from 'rxjs';
import { Assessor, CampaignData, ExerciseAverage } from '../types/assessor-type';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() {
  }

  public getExerciseAverages(selectedCampaignId: number = 0): Observable<ExerciseAverage[]> {
    return of(campaignData[selectedCampaignId].exerciseAverages ?? []);
  }

  public getCampaigns(): Observable<CampaignData[]> {
    return of(campaignData ?? []);
  }

  public getAssessorData(selectedCampaignId: number = 0): Observable<Assessor[]> {
    return of(campaignData[selectedCampaignId].assessors ?? []);
  }

}
