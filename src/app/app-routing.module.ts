import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';
import { OngoingSprintComponent } from './ongoing-sprint/ongoing-sprint.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-sprint', component: NewSprintComponent },
  { path: 'ongoing-sprint', component: OngoingSprintComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
