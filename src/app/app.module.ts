import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CosmeticsOutlineBarComponent} from './components/outline-bar/cosmetics-outline-bar.component';
import {CosmeticsPageModule} from './components/page/cosmetics-page.module';
import {CosmeticsDetailComponent} from './components/detail/cosmetics-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbTooltipModule} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        CosmeticsOutlineBarComponent,
        CosmeticsDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CosmeticsPageModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbLayoutModule,
        AppRoutingModule,
        NbTooltipModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
