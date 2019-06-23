import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IprReportModule} from '../../projects/ipr-report/src/lib/ipr-report.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IprReportModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
