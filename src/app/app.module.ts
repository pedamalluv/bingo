import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionsComponent } from './actions/actions.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HintComponent } from './hint/hint.component';
import { HomeComponent } from './home/home.component';
import { NoSlotComponent } from './no-slot/no-slot.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    HeaderComponent,
    HomeComponent,
    TicketComponent,
    NoSlotComponent,
    HintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
