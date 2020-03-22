import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-help-environment',
  templateUrl: './help-environment.component.html',
  styleUrls: ['./help-environment.component.css']
})
export class HelpEnvironmentComponent implements OnInit {
  
  title = 'Help Center | Environment';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
