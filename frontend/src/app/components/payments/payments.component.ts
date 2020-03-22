import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  
  title = 'Payments | View rules';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  
  ngOnInit(){
    this.titleService.setTitle(this.title);
  }

}
