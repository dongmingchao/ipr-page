import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CosmeticsPageComponent} from './components/page/cosmetics-page.component';
import {CosmeticsOutlineBarComponent} from './components/outline-bar/cosmetics-outline-bar.component';
import {CosmeticsPageModule} from './components/page/cosmetics-page.module';

@NgModule({
    declarations: [
        AppComponent,
        CosmeticsPageComponent,
        CosmeticsOutlineBarComponent,
    ],
    imports: [
        BrowserModule,
        CosmeticsPageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
