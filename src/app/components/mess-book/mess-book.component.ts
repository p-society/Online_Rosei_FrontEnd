import { Component, OnInit } from '@angular/core';
import { Http , HttpModule } from '@angular/http'

@Component({
  selector: 'app-mess-book',
  templateUrl: './mess-book.component.html',
  styleUrls: ['./mess-book.component.css']
})
export class MessBookComponent implements OnInit {

  monBrVegNon : String;
  monLunVegNon : String;
  monDinvegNon: String;
  tuesBrVegNon: String;
  tuesLunVegNon: String;
  tuesDinvegNon: String;
  wedBrVegNon: String;
  wedLunVegNon: String;
  wedDinvegNon: String;
  thuBrVegNon: String;
  thuLunVegNon: String;
  thuDinvegNon: String;
  friBrVegNon: String;
  friLunVegNon: String
  friDinvegNon: String;
  satBrVegNon: String;
  satLunVegNon: String;
  satDinvegNon: String;
  sunBrVegNon: String;
  sunLunVegNon: String;
  sunDinvegNon: String;

  // 1st floor mess1

  monBrVegNon1 : String;
  monLunVegNon1 : String;
  monDinvegNon1: String;
  tuesBrVegNon1: String;
  tuesLunVegNon1: String;
  tuesDinvegNon1: String;
  wedBrVegNon1: String;
  wedLunVegNon1: String;
  wedDinvegNon1: String;
  thuBrVegNon1: String;
  thuLunVegNon1: String;
  thuDinvegNon1: String;
  friBrVegNon1: String;
  friLunVegNon1: String
  friDinvegNon1: String;
  satBrVegNon1: String;
  satLunVegNon1: String;
  satDinvegNon1: String;
  sunBrVegNon1: String;
  sunLunVegNon1: String;
  sunDinvegNon1: String;

  BreakFastValue: number;
  LunchValue: number;
  DinnerValue: number;
  
  constructor(
    private http: Http,
  ) {
   }

  ngOnInit() {

  }

  bookCoupon(){

  }
}
