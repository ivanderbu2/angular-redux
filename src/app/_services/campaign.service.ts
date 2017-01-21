import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Campaign } from '../_models/campaign';

import { HttpService } from '../core/http.service';

import { AppStore } from '../app.store';

@Injectable()
export class CampaignService {

    // Redux based variables
    campaigns: Observable<Array<Campaign>>;

    campaignUrl = 'campaign';

    constructor(
        private http: HttpService,
        private store: Store<AppStore>
    ) { 
        this.campaigns = store.select( store => store.campaigns );
    }

    loadCampaigns() {
        return this.http.get(this.campaignUrl)
                        .map((res: Response) => {
                            let body = res.json();
                            return body.data || {};
                        })
                        .map((payload: Campaign[]) => {
                            return { type: 'ADD_CAMPAIGNS', payload };
                        })
                        .subscribe((action) => {
                            this.store.dispatch(action);
                        });
    }
}