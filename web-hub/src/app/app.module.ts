import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ComponentsModule } from './components/components.module';
import { HttpService } from './services/http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WbHbModule } from './wb-hb.module';
import { HeaderModule } from './components/base/header/header.module';
import { LoaderModule } from './components/base/loader/loader.module';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoginModule } from './components/login/login.module';
import { PERSISTENCE } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    WbHbModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    LoaderModule,
    HeaderModule,
    LoginModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: PERSISTENCE, useValue: 'session' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
