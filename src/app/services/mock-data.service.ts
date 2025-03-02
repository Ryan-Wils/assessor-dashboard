import { Injectable } from '@angular/core';
import { campaignData } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() {
  }

  public getExerciseAverages(selectedCampaignId: number = 0) {
    return campaignData[selectedCampaignId].exerciseAverages.map((exercise) => {
      return {
        ...exercise
      };
    });
  }


  public getCampaigns() {
    return campaignData.map((campaign) => {
      return {
        name: campaign.name,
        startDate: campaign.startDate,
        endDate: campaign.endDate,
        campaignId: campaign.campaignId
      };
    });
  }

  public getAssessorData(selectedCampaignId: number = 0) {
    return campaignData[selectedCampaignId].assessors.map((assessor) => {
      return {
        ...assessor
      };
    });
  }

}
