import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentShowsComponent } from './Components/current-shows/current-shows.component';
import { SeasonsEpisodesComponent } from './Components/seasons-episodes/seasons-episodes.component';
import { CurrentScheduleComponent } from './Components/current-schedule/current-schedule.component';
import { SearchShowComponent } from './Components/search-show/search-show.component';
import { SearchbarComponent } from './Components/searchbar/searchbar.component';
import { ShowBasedOnGenreComponent } from './Components/show-based-on-genre/show-based-on-genre.component';

const routes: Routes = [
 {path:'', component:CurrentShowsComponent, pathMatch: 'full'},
 {path:'show/:showid', component:SeasonsEpisodesComponent},
 {path:'shows/schedule/:curDate', component:CurrentScheduleComponent},
 {path: 'shows/search', component: SearchShowComponent },
 {path:'shows/genre', component: ShowBasedOnGenreComponent},
 {path:'shows/genre/:filter', component: ShowBasedOnGenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
