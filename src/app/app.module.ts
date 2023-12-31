import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTitleBarComponent } from './components/menu-title-bar/menu-title-bar.component';
import { MainNewsComponent } from './components/main-news/main-news.component';
import { SmallNewsComponent } from './components/small-news/small-news.component';
import { SmallNewsHolderComponent } from './components/small-news-holder/small-news-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTitleBarComponent,
    MainNewsComponent,
    SmallNewsComponent,
    SmallNewsHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
