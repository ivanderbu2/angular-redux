import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Campaign } from '../../_models/campaign';
import { CampaignService } from '../../_services/campaign.service';

@Component({
    selector: 'campaign-count',
    templateUrl: 'count.component.html'
})
export class CampaignCountComponent implements OnInit {

    // Redux based variables
    campaigns: Observable<Array<Campaign>>;

    constructor(
        private campaignService: CampaignService
    ) { 
        this.campaigns = campaignService.campaigns;
    }


    ngOnInit() { }
}