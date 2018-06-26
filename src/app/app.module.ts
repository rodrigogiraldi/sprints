import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';
import { OngoingSprintComponent } from './ongoing-sprint/ongoing-sprint.component';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { PastSprintComponent } from './past-sprint/past-sprint.component';
import { FormatSecondsPipe } from './format-seconds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NewSprintComponent,
    OngoingSprintComponent,
    CallbackComponent,
    PastSprintComponent,
    FormatSecondsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
