import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-your-languages',
  templateUrl: './experience-your-languages.component.html',
  styleUrls: ['./experience-your-languages.component.css']
})
export class ExperienceYourLanguagesComponent implements OnInit {

  title = 'Experience | Your languages';

  pageHeading: string = 'Your languages';
  pageSteps: string = 'Step 3 of 19';
  pageDescription: string = '';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/type';

  languagesForm: FormGroup;
  submitted = false;

  language_mainList = [
    { val: 'de', name: 'Deutsch'},
    { val: 'ru', name: 'Русский'},
    { val: 'pt', name: 'Português'},
    { val: 'ko', name: '한국어'},
    { val: 'ja', name: '日本語' },
    { val: 'en', name: 'English' },
    { val: 'it', name: 'Italiano' },
    { val: 'fr', name: 'Français' },
    { val: 'ca', name: 'Català' },
    { val: 'es', name: 'Español' },
    { val: 'zh', name: '中文 (简体)' }
  ]

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.languagesForm = this.formBuilder.group({
        language_main: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.languagesForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.languagesForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/your-background']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.languagesForm.value));
      //console.log(this.languagesForm);
  }

}
