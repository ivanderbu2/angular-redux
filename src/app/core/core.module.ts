import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XHRBackend, RequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { HttpService } from './http.service';
import { httpServiceFactory } from '../_factories/http-service.factory';
import { AngularReduxRequestOptions } from './angular-redux-request.options';
import { LoaderService } from './loader/loader.service';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        LoaderComponent
    ],
    declarations: [
        LoaderComponent
    ],
    providers: [
        LoaderService,
        {
            provide: HttpService,
            useFactory: httpServiceFactory,
            deps: [XHRBackend, RequestOptions, LoaderService ]    
        }
    ]
})

export class CoreModule { }
