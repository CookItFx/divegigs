import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-help-advice',
  templateUrl: './help-advice.component.html',
  styleUrls: ['./help-advice.component.css']
})
export class HelpAdviceComponent implements OnInit {
  
  title = 'Help Center | Advice';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
