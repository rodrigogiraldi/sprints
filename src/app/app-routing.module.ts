import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';
import { OngoingSprintComponent } from './ongoing-sprint/ongoing-sprint.component';
import { CallbackComponent } from './callback/callback.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'new-sprint', component: NewSprintComponent },
  { path: 'ongoing-sprint', component: OngoingSprintComponent },
  { path: 'callback', component: CallbackComponent},
  { path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
