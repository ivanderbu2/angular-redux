import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Campaign } from '../../_models/campaign';

import { CampaignService } from '../../_services/campaign.service';

@Component({
    selector: 'campaigns',
    templateUrl: 'campaign.component.html',
    styleUrls: ['campaign.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class CampaignComponent implements OnInit, OnDestroy {

    // Redux based variables
    campaigns: Observable<Array<Campaign>>;

    private subscription: Subscription;

    constructor(
        private campaignService: CampaignService
    ) { 
        this.campaigns = campaignService.campaigns;
    }

    ngOnInit() { 
        this.subscription = this.campaigns
                    .subscribe(campaigns => {
                        // Do something with campaigns
                    }, error => {
                        // Do something with error
                    });

        this.campaignService.loadCampaigns();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    loadNew() {
        this.campaignService.loadCampaigns();
    }

}