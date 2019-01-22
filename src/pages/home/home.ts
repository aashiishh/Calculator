import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  number1 : number = 0;
  sign : string ='';
  store : string[3];
  // number2 : number;
  display : string ='';
  constructor(public navCtrl: NavController) {

  }

  getNumber(num : string)
  {
    this.display = this.display+num;
  }

  getSign(sn : string)
  {
      if(!this.store)
      {
        this.store=this.display;
        this.store=sn;
        console.log(this.store);
      }
  }

  calculate()
  {

  }

  clear()
  {
    this.display='';
  }

  back()
  {
    this.display=this.display.slice(0,this.display.length-1);
  }


}
