import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CourseServices{

  constructor(private http: HttpClient) {}

  findAllCourses = () =>
    fetch("http://courseservice-env.eba-kc5r3dri.us-east-2.elasticbeanstalk.com/api/v1/courses/").then(Response => Response.json())

  createCourse(cTitle: string, cAuthor: string): Observable<any>{

    const u = '{"title": "' + cTitle + '", "author": "' + cAuthor + '"}'
    console.log(u)
    const jobj = JSON.parse(u)
    return this.http.post<any>("http://courseservice-env.eba-kc5r3dri.us-east-2.elasticbeanstalk.com/api/v1/courses/", jobj)

  }

}
