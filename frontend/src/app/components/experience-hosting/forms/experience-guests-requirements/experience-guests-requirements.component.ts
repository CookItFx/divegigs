import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-guests-requirements',
  templateUrl: './experience-guests-requirements.component.html',
  styleUrls: ['./experience-guests-requirements.component.css']
})
export class ExperienceGuestsRequirementsComponent implements OnInit {

  title = 'Experience | Guests requirements';

  pageHeading: string = 'Who can attend your experience?';
  pageSteps: string = 'Step 14 of 19';
  pageDescription: string = 'Keep in mind that someone booking your experience might book spots for other guests. If there are strict requirements around age, skill level, or certifications, include them here.';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/experience-notes';

  requireForm: FormGroup;
  submitted = false;

  min_ageList = [
    { val: '1', name: 'Sea adventure'},
    { val: '2', name: 'Freediving'},
    { val: '3', name: 'Scuba diving'},
    { val: '4', name: 'Tech diving'},
    { val: '5', name: 'Snorkeling' }
  ]

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.requireForm = this.formBuilder.group({
      min_age: [''],
      add_reqs: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.requireForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.requireForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/experience-size']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.requireForm.value));
      //console.log(this.requireForm);
  }

}
