import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-what-will-you-do',
  templateUrl: './experience-what-will-you-do.component.html',
  styleUrls: ['./experience-what-will-you-do.component.css']
})
export class ExperienceWhatWillYouDoComponent implements OnInit {

  title = 'Experience | What will you do';

  pageHeading: string = 'Describe what you’ll do';
  pageSteps: string = 'Step 6 of 19';
  pageDescription: string = 'From beginning to end, in the order you’ll do the activities';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/about-you';

  youdoForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.youdoForm = this.formBuilder.group({
      experience: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.youdoForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.youdoForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/describe-each-place']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.youdoForm.value));
      //console.log(this.youdoForm);
  }

}
