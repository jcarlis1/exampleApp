import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public today = Date.now();

  public name = "Billy Bob";

  public items = ["Shirts", "Pants", "Socks", "Shoes", "Ties"];

  public stuff = ["Shirt", "Pant", "Sock", "Shoe", "Tie"];

  constructor() {}



  itemSelected(item : any){
    
  }
}
