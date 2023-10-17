import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { MainCardComponent } from './main-card/main-card.component';
import { NewsSidebarComponent } from './news-sidebar/news-sidebar.component';
import { SideCardsComponent } from './news-sidebar/side-cards/side-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    PageTitleComponent,
    MainCardComponent,
    NewsSidebarComponent,
    SideCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
