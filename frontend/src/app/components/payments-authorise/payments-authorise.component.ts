import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-payments-authorise',
  templateUrl: './payments-authorise.component.html',
  styleUrls: ['./payments-authorise.component.css']
})
export class PaymentsAuthoriseComponent implements OnInit {
  
  title = 'Payments | Authorise';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  
  ngOnInit(){
    this.titleService.setTitle(this.title);
  }

}
