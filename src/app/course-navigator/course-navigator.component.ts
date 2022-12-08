import { Component, OnInit } from '@angular/core';
import { CourseServices } from 'src/services/CourseServices';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  selectedCourse = {module: [] as any[], id:""}
  selectedModule = {lesson: [] as any[], id:""}
  courses: any[] | undefined
  CourseTitle: any
  Author: any

  addCourse(CourseTitle: any, Author: any) {
    const course = this.courseServices.createCourse(CourseTitle, Author).subscribe((response: any) => {console.log(response)})
  }

  constructor(private courseServices: CourseServices) {
  }

  ngOnInit(): void {
    this.courseServices.findAllCourses().then(courses => this.courses = courses)
  }

  selectCourse(course: any) {
    this.selectedCourse = course
  }

  selectModule(module: any) {
    this.selectedModule = module
  }

}
