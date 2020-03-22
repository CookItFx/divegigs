import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-help-gear',
  templateUrl: './help-gear.component.html',
  styleUrls: ['./help-gear.component.css']
})
export class HelpGearComponent implements OnInit {
  
  title = 'Help Center | Gear & Equipment';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
