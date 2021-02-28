import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("MLK", "Martin Luther King", "Injustice anywhere is a threat to justice everywhere."),
    new Quote("Life", "Margeret Atwood", "In the end we all become stories ")
  ]
    

  addQuote(chosenQuote:any) {
    this.quotes.push(chosenQuote)
  }

  upvote(i:any) {
    this.quotes[i].upvotes ++;
  }
  downvote(i:any) {
    this.quotes[i].downvotes  ++;
  }
  delQuote(i:any) {
    this.quotes.splice(i, 1)
  }
  preNum:any
  lastNum:any
  counter:any

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }



constructor() { }

ngOnInit() {
}

}
