import { Component, inject, input, OnInit, signal } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  campaigns = inject(MockDataService).getCampaigns();
  centerToolbar = input<boolean>(false);
  selectedCampaign = signal(this.campaigns[0]);

  constructor() { }

  ngOnInit() {
  }

  public setSelectedAssessor(campaignId: number | null): void {
    const campaignPos = this.campaigns.findIndex((campaign) => campaign.campaignId === campaignId);
    this.selectedCampaign.set(this.campaigns[campaignPos]);
  }

}
