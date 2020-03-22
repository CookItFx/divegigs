import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-help-marine-life',
  templateUrl: './help-marine-life.component.html',
  styleUrls: ['./help-marine-life.component.css']
})
export class HelpMarineLifeComponent implements OnInit {
  
  title = 'Help Center | Marine Life';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
