import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-title',
  templateUrl: './experience-title.component.html',
  styleUrls: ['./experience-title.component.css']
})
export class ExperienceTitleComponent implements OnInit {

  title = 'Experience | Title';

  pageHeading: string = 'Give your experience a title';
  pageSteps: string = 'Step 10 of 19';
  pageDescription: string = 'Make it short, descriptive, and exciting.';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/guests-should-bring';

  titleForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.titleForm = this.formBuilder.group({
      title: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.titleForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.titleForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/experience-photos']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.titleForm.value));
      //console.log(this.titleForm);
  }

}
