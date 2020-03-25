import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-describe-each-place',
  templateUrl: './experience-describe-each-place.component.html',
  styleUrls: ['./experience-describe-each-place.component.css']
})
export class ExperienceDescribeEachPlaceComponent implements OnInit {

  title = 'Experience | Describe each place';

  pageHeading: string = "Describe each place you'll visit";
  pageSteps: string = 'Step 7 of 19';
  pageDescription: string = 'If your experience includes multiple stops, describe every place you’ll stop to explore';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/what-will-you-do';

  describeForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.describeForm = this.formBuilder.group({
      describe: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.describeForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.describeForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/what-i-will-provide']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.describeForm.value));
      //console.log(this.describeForm);
  }

}
