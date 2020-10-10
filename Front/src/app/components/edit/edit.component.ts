import { Component, OnInit } from '@angular/core';
import {Course } from '../../course' ;
import { ActivatedRoute, Router } from "@angular/router";
import { LinkerService } from '../../linker.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  CourseData: Course[];
  CourseProfile: any = ['Web dev','intergiciel','Andriod','Base de donne']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private linker: LinkerService,
    private router: Router
  ) { }


  ngOnInit() {
    this.updateCourse();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getCourse(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      teacher: ['', [Validators.required]],
      coef: ['', [Validators.required]]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('teacher').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getCourse(id) {
    this.linker.getCourse(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        teacher: data['teacher'],
        coef: data['coef'],
      });
    });
  }

  updateCourse() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      teacher: ['', [Validators.required]],
      coef: ['', [Validators.required]]

    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.linker.updateCourse(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/courses');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
