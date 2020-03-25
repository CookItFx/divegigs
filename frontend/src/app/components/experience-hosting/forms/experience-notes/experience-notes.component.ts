import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-notes',
  templateUrl: './experience-notes.component.html',
  styleUrls: ['./experience-notes.component.css']
})
export class ExperienceNotesComponent implements OnInit {

  title = 'Experience | Notes';

  pageHeading: string = 'What else do guests need to know before they book?';
  pageSteps: string = 'Step 13 of 19';
  pageDescription: string = '';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/experience-map';

  notesForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.notesForm = this.formBuilder.group({
      details: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.notesForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.notesForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/experience-requirements']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.notesForm.value));
      //console.log(this.notesForm);
  }

}
