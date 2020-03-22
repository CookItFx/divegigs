import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-glogs',
  templateUrl: './glogs.component.html',
  styleUrls: ['./glogs.component.css']
})
export class GlogsComponent implements OnInit {
  
  title = 'Glog | ';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  
  ngOnInit(){
    this.titleService.setTitle(this.title);
  }

}
