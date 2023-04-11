import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentShowsComponent } from './Components/current-shows/current-shows.component';
import { ShowsService } from './Services/shows.service';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCard, MatCardModule } from '@angular/material/card';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SeasonsEpisodesComponent } from './Components/seasons-episodes/seasons-episodes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { CurrentScheduleComponent } from './Components/current-schedule/current-schedule.component';
import { ScheduleService } from './Services/schedule.service';
import { CommonModule } from '@angular/common';
import { SearchService } from './../app/Services/search.service';
import { SearchShowComponent } from './../app/Components/search-show/search-show.component';
import { SearchbarComponent } from './../app/Components/searchbar/searchbar.component';
import { ShowBasedOnGenreComponent } from './Components/show-based-on-genre/show-based-on-genre.component';
import {  MatSidenavModule} from "@angular/material/sidenav";
import { MatListModule} from "@angular/material/list";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    CurrentShowsComponent,
    SeasonsEpisodesComponent,
    CurrentScheduleComponent,
    SearchbarComponent,
    SearchShowComponent,
    ShowBasedOnGenreComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
     MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    CommonModule,
  
  ],
  providers: [ShowsService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
