import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-s-experiences',
  templateUrl: './s-experiences.component.html',
  styleUrls: ['./s-experiences.component.css']
})
export class SExperiencesComponent implements OnInit {
  
  title = 'Discover | Experiences';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
