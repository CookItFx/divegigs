import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-what-iwill-provide',
  templateUrl: './experience-what-iwill-provide.component.html',
  styleUrls: ['./experience-what-iwill-provide.component.css']
})

export class ExperienceWhatIWillProvideComponent implements OnInit {

  title = 'Experience | What I will provide';

  pageHeading: string = "Add details about what you'll provide";
  pageSteps: string = 'Step 8 of 19';
  pageDescription: string = 'You can provide food and drink, special equipment or anything else special to make your guests comfortable.';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/describe-each-place';

  provideForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.provideForm = this.formBuilder.group({
        //xx: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.provideForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.provideForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/guests-should-bring']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.provideForm.value));
      //console.log(this.provideForm);
  }

}
