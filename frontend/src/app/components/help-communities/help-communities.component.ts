import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-help-communities',
  templateUrl: './help-communities.component.html',
  styleUrls: ['./help-communities.component.css']
})
export class HelpCommunitiesComponent implements OnInit {
  
  title = 'Help Center | Communities';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
