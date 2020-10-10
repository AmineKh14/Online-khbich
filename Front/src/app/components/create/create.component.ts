import { Component, OnInit, NgZone  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LinkerService } from '../../linker.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  submitted = false;
  courseForm: FormGroup;
  CourseProfile:any = ['Web dev','intergiciel','Andriod','Base de donne']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: LinkerService
  ) {
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm() {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required]],
      teacher: ['', [Validators.required]],
      coef: ['', [Validators.required]],
    })
  }

  // Choose module with select dropdown
  updateProfile(e){
    this.courseForm.get('teacher').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.courseForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.courseForm.valid) {
      return false;
    } else {
      this.apiService.createCourse(this.courseForm.value).subscribe(
        (res) => {
          console.log('Course successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/courses'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
