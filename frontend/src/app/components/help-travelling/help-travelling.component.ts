import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-help-travelling',
  templateUrl: './help-travelling.component.html',
  styleUrls: ['./help-travelling.component.css']
})
export class HelpTravellingComponent implements OnInit {
  
  title = 'Help Center | Travelling';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
