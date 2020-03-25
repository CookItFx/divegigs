import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-type',
  templateUrl: './experience-type.component.html',
  styleUrls: ['./experience-type.component.css']
})
export class ExperienceTypeComponent implements OnInit {

  title = 'Experience | Type';

  pageHeading: string = 'Your theme';
  pageSteps: string = 'Step 2 of 19';
  pageDescription: string = '';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/location';

  typeForm: FormGroup;
  submitted = false;

  public myFlag: boolean = false;

  themeList = [
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
    
    this.typeForm = this.formBuilder.group({
        theme: [this.themeList[1]]
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.typeForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.typeForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/your-languages']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.typeForm.value));
      //console.log(this.typeForm);
  }

}

//https://medium.com/@kastepanyan24/how-to-set-selected-option-dynamically-in-angular-6-85c99958cca5
