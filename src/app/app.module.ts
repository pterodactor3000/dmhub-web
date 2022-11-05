import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { PERSISTENCE } from '@angular/fire/compat/auth';
import {
  AngularFireAuthGuard,
  AngularFireAuthGuardModule,
} from '@angular/fire/compat/auth-guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { API_URL } from '@definitions/tokens';
import { environment } from '@env';
import { HttpService } from '@services/http.service';
import { LocalService } from '@services/local.service';
import { HeaderModule } from '@base/header/header.module';
import { LoaderModule } from '@base/loader/loader.module';
import { LoaderInterceptor } from '@services/loader.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WbHbModule } from './wb-hb.module';
import { UpdateModule } from './components/update/update.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    WbHbModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    LoaderModule,
    HeaderModule,
    UpdateModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthGuardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    HttpService,
    LocalService,
    AngularFireAuthGuard,
    { provide: API_URL, useValue: environment.baseUrl },
    { provide: HTTP_INTERCEPTORS, useExisting: LoaderInterceptor, multi: true },
    { provide: PERSISTENCE, useValue: 'local' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
