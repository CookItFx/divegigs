import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-payments-guests',
  templateUrl: './payments-guests.component.html',
  styleUrls: ['./payments-guests.component.css']
})
export class PaymentsGuestsComponent implements OnInit {
  
  title = 'Payments | Guest';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  
  ngOnInit(){
    this.titleService.setTitle(this.title);
  }

}
