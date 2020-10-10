import { Component, OnInit } from '@angular/core';
import { LinkerService} from '../../linker.service'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  Course:any = [];

  constructor(private linkerService: LinkerService) {
    this.readCourse();
  }

  ngOnInit() {}

  readCourse(){
    this.linkerService.getCourses().subscribe((data) => {
     this.Course = data;
    })
  }

  removeCourse(course, index) {
    if(window.confirm('This Course will be deleted')) {
        this.linkerService.deleteCourse(course.name).subscribe((data) => {
          this.Course.splice(index, 1);
        }
      )
    }
  }


}
