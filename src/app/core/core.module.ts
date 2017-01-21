import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XHRBackend, RequestOptions } from '@angular/http';

import { HttpService } from './http.service';
import { httpServiceFactory } from '../_factories/http-service.factory';
import { AngularReduxRequestOptions } from './angular-redux-request.options';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
    ],
    declarations: [
    ],
    providers: [
        {
            provide: HttpService,
            useFactory: httpServiceFactory,
            deps: [XHRBackend, RequestOptions]    
        }
    ]
})

export class CoreModule { }
