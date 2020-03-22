import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-hosting',
  templateUrl: './experience-hosting.component.html',
  styleUrls: ['./experience-hosting.component.css']
})
export class ExperienceHostingComponent implements OnInit {
  
  title = 'Experience | Create';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
