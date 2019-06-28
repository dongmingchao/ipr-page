import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {IprReportBackend, IprReportModule} from './usage/mock';
import {ReportsService} from './usage/services';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        IprReportModule,
    ],
    providers: [
        {provide: IprReportBackend, useClass: ReportsService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
