import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CosmeticsOutlineBarComponent} from './components/outline-bar/cosmetics-outline-bar.component';
import {CosmeticsPageModule} from './components/page/cosmetics-page.module';
import {CosmeticsDetailComponent} from './components/detail/cosmetics-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        CosmeticsOutlineBarComponent,
        CosmeticsDetailComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CosmeticsPageModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
