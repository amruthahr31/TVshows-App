import { Component, OnInit } from '@angular/core';
import { SEpisodesService } from '../../Services/s-episodes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seasons-episodes',
  templateUrl: './seasons-episodes.component.html',
  styleUrls: ['./seasons-episodes.component.css']
})
export class SeasonsEpisodesComponent implements OnInit {

  Scastsummary;
  seasons;
  episodes;
  showid:number;
  seasonid:number;
  evt: boolean;
  castname: string;
  cast:Array<string>;

  constructor(private showdetails: SEpisodesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showid = this.route.snapshot.params.showid;
    this.showdetails.getcastandsummary(this.showid).subscribe((data) =>{
  
      var re = /<[^>]+>/g;
  
      let presummary = data.summary;
      let validstring=presummary.replace(re, '');
      console.log("summary:"+validstring);
      data.summary = validstring;
      
     
    
      this.Scastsummary = data;
      /* for (var i in data._embedded.cast) {
        this.castname = data._embedded.cast[i].person.name;
         console.log("cast:", this.castname);
           
        
      }*/
      
  });
      
    
    this.showdetails.getseasons(this.showid).subscribe(data => this.seasons = data);
    
    
   
  }

  getseasonID(eventparam){
   this.seasonid=eventparam.value;
   console.log("seasonid:"+eventparam.value);
   if (this.seasonid != undefined){
     this.showdetails.getseasonepisodes(this.seasonid).subscribe(data => {
      
  
        var re = /<[^>]+>/g;
         for (var i in data) {
          let presummary = data[i].summary;
        let validstring=presummary.replace(re, '');
        console.log("summary:"+validstring);
        data[i].summary = validstring;
        
        }
        
       
      
        
         this.episodes = data;
      
        
    });
    
  }
   
  }
  

}
