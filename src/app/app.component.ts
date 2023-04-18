import { Component, OnInit, Input, Output } from '@angular/core';
import { ISearchShow } from './../app/isearch-show';
import { SearchService } from './../app/Services/search.service';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ShowsService } from './Services/shows.service';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'TVshows-App';
  myDate = new Date();
  currentShowName: ISearchShow[];

  
  @HostListener('window:popstate', ['$event'])  onPopState(event)
  {
      console.log('Back button pressed');
      window.location.href=``;
  }

  constructor(private SearchService:SearchService,private route: ActivatedRoute,private ShowService:ShowsService, private customRouter:Router){}
 
 navbarOpen = false;

 
  onSelect(event)
  {
      console.log(event);
      console.log("Entered onSelect filter : " + event.target.firstChild.data);
      window.location.href=(`/shows/genre/${event.target.firstChild.data}`);
  }
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  doSearch(searchValue)
  {
    //window.location.href=`/shows/search`;
    this.SearchService.getSearchResult(searchValue).subscribe(data => this.currentShowName = data);
    console.log(this.currentShowName);
    this.customRouter.navigate(['/shows/search']);
}
  getshowschedule(){
    const curDate = formatDate(this.myDate, 'yyyy-MM-dd', 'en-US');
    window.location.href=`/shows/schedule/${curDate}`;
  }

 gethomepage()
 {
   window.location.href=``;
 }

    getShowsByGenre(event) {

   // var target= event.target||event.srcElement||event.currentTarget;
    //var idAttr = target.attributes.id;
     //var value = idAttr.nodeValue;
    var filter = event.target.value;
    console.log("valuegenre:" + filter);

    
  
    window.location.href=`/shows/genre/Action`;
  } 
  
}
