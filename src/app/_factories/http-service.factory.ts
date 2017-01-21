import { XHRBackend } from '@angular/http';
import { AngularReduxRequestOptions } from '../core/angular-redux-request.options';
import { HttpService } from '../core/http.service';

function httpServiceFactory(backend: XHRBackend, options: AngularReduxRequestOptions ) {
    return new HttpService(backend, options);
}

export { httpServiceFactory };