import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-guests-duration',
  templateUrl: './experience-guests-duration.component.html',
  styleUrls: ['./experience-guests-duration.component.css']
})
export class ExperienceGuestsDurationComponent implements OnInit {

  title = 'Experience | Guests duration';

  pageHeading: string = "What's the duration of your experience?";
  pageSteps: string = 'Step 16 of 19';
  pageDescription: string = 'Most experiences are under three hours.';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/experience-size';

  durationForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.durationForm = this.formBuilder.group({
      hours: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.durationForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.durationForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/experience-pricing']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.durationForm.value));
      //console.log(this.durationForm);
  }

}
