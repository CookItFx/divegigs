import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-help-agencies',
  templateUrl: './help-agencies.component.html',
  styleUrls: ['./help-agencies.component.css']
})
export class HelpAgenciesComponent implements OnInit {
  
  title = 'Help Center | Agencies';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
