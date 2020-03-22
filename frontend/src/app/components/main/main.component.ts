import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  title = 'Divegigs | Welcome';

  constructor(private meta: Meta, private titleService: Title) {
    
    this.meta.updateTag({ name: 'robots', content: '' });
    this.meta.updateTag({ name: 'description', content: '' });
    this.meta.updateTag({ name: 'keywords', content: '' });

    this.meta.updateTag({ property: 'og:type', content: '' });
    this.meta.updateTag({ property: 'og:site_name', content: '' });
    this.meta.updateTag({ property: 'og:title', content: '' });
    this.meta.updateTag({ property: 'og:url', content: '' });
    this.meta.updateTag({ property: 'og:description', content: '' });
    
    this.meta.updateTag({ name: 'twitter:card', content: '' });
    this.meta.updateTag({ name: 'twitter:site', content: '' });
    this.meta.updateTag({ name: 'twitter:title', content: '' });
    this.meta.updateTag({ name: 'twitter:description', content: '' });
    this.meta.updateTag({ name: 'twitter:image', content: '' });

  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
