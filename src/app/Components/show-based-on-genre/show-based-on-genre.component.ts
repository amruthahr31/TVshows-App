import { Component, OnInit, Input } from '@angular/core';
import { ShowsService } from 'src/app/Services/shows.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-based-on-genre',
  templateUrl: './show-based-on-genre.component.html',
  styleUrls: ['./show-based-on-genre.component.css']
})

export class ShowBasedOnGenreComponent implements OnInit {
  filteredlistafter = Array<object>();
  gen: string[];
  filtered;
  filter;
  filteredlistbefore;

  constructor
  (
    private ShowService: ShowsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=>{
        console.log("Entered ngOnInit filter : " + params.get("filter"));
        this.filtered=params.get("filter");
        this.getMovies(this.filtered);  
        console.log("Leaving ngOnInit ");

      }  
    );
  }


  getMovies(filtered) {
    this.filter=filtered.charAt(0).toUpperCase()+filtered.slice(1);
    // console.log("filter",this.filter);
    //console.log("FLITER",this.filter.charAt(0).toUpperCase()+this.filter.slice(1))
    this.ShowService.getcurrentshows().subscribe(data => {
      //console.log("data",data)
      for (var i in data) {
        this.gen = data[i].genres;
        //console.log("gen",this.gen)
        if (this.gen.indexOf(this.filter) !== -1) 
        {
          // console.log("contains", this.gen);
          // console.log("filteredlistbefore:", data[i].name);
            
            this.filteredlistafter.push({
              image: data[i].image.medium,
              name: data[i].name,
              id: data[i].id
            
            })
        }
      }
    
      this.filteredlistbefore = data;
    });
  }
    
  getshowsdetails(showid:number){
    window.location.href=`/show/${showid}`;
  }
}
