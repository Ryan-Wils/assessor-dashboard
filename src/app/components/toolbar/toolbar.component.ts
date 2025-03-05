import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CampaignData } from '../../types/assessor-type';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  campaigns = toSignal<CampaignData[]>(inject(MockDataService).getCampaigns());
  centerToolbar = input<boolean>(false);
  selectedCampaign = signal<CampaignData>({} as CampaignData);

  constructor() { }

  ngOnInit() {
  }

}
