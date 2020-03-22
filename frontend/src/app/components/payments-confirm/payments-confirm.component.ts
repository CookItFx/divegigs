import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-payments-confirm',
  templateUrl: './payments-confirm.component.html',
  styleUrls: ['./payments-confirm.component.css']
})
export class PaymentsConfirmComponent implements OnInit {
  
  title = 'Payments | Confirm';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  
  ngOnInit(){
    this.titleService.setTitle(this.title);
  }

}
