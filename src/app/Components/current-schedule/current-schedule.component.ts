import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './../../Services/schedule.service';
import { ActivatedRoute } from '@angular/router';
import { of, from } from 'rxjs';
import { groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { VariableAst } from '@angular/compiler';


@Component({
  selector: 'app-current-schedule',
  templateUrl: './current-schedule.component.html',
  styleUrls: ['./current-schedule.component.css']
})
export class CurrentScheduleComponent implements OnInit {
  schedules;
  countrycode: string;
  currentdate: Date;
  groupedobjects;
  constructor(private showSchedule : ScheduleService,private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.currentdate = this.route.snapshot.params.curDate;
  
    this.countrycode = 'US';
    this.showSchedule.getCurrentSchedule(this.countrycode,this.currentdate).subscribe((data) => {
      var showTimeMap = {};
      
      for(var show in data) {
        let showtime = data[show].show.schedule.time;
        
        if(Object.keys(showTimeMap).indexOf(showtime) === -1 ) {
          showTimeMap[showtime] = [data[show]];
        } else {
          showTimeMap[showtime].push(data[show]);
        } 
       
      }
         this.schedules = showTimeMap;
    });
   
  
  }
  
  
}
