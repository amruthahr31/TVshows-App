import { Component, OnInit, Input } from '@angular/core';
import {ISearchShow} from './../../isearch-show';
import { SearchService } from './../../Services/search.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-show',
  templateUrl: './../../Components/search-show/search-show.component.html',
  styleUrls: ['./../../Components/search-show/search-show.component.css']
})
export class SearchShowComponent implements OnInit {
  currentShowName:ISearchShow[];
  @Input() searchShow:ISearchShow[]
  constructor(private route: ActivatedRoute,private SearchService: SearchService) {
   }

  ngOnInit(): void {
    
   
  }

  getshowsdetails(showid:number){
    window.location.href=`/show/${showid}`;
  }

}
