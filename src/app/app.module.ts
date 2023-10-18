import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { NewsSidebarComponent } from './components/news-sidebar/news-sidebar.component';
import { SideCardsComponent } from './components/news-sidebar/side-cards/side-cards.component';

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
