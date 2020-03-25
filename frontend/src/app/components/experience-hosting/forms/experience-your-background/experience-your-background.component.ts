import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-your-background',
  templateUrl: './experience-your-background.component.html',
  styleUrls: ['./experience-your-background.component.css']
})
export class ExperienceYourBackgroundComponent implements OnInit {

  title = 'Experience | Your background';

  pageHeading: string = 'Your background';
  pageSteps: string = 'Step 4 of 19';
  pageDescription: string = '';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/your-languages';

  backgroundForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.backgroundForm = this.formBuilder.group({
        expertise: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.backgroundForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.backgroundForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/about-you']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.backgroundForm.value));
      //console.log(this.backgroundForm);
  }

}
