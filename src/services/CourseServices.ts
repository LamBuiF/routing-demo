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
    // fetch("http://localhost:8080/api/v1/courses/").then(Response => Response.json())

  createCourse(cTitle: string, cAuthor: string): Observable<any>{

    const u = '{"title": "' + cTitle + '", "author": "' + cAuthor + '"}'
    console.log(u)
    const jobj = JSON.parse(u)
    return this.http.post<any>("http://courseservice-env.eba-kc5r3dri.us-east-2.elasticbeanstalk.com/api/v1/courses/", jobj)
    // return this.http.post<any>("http://localhost:8080/api/v1/courses/", jobj)

  }

  createModule(mTitle: string, id: any): Observable<any>{

    const u = '{"title": "' + mTitle + '"}'
    console.log(u)
    const jobj = JSON.parse(u)
    return this.http.post<any>("http://courseservice-env.eba-kc5r3dri.us-east-2.elasticbeanstalk.com/api/v1/courses/", jobj)
    // return this.http.patch<any>("http://localhost:8080/api/v1/courses/" + id, jobj)

  }

  createLesson(lTitle: string, id: any): Observable<any>{
    const u = '{"title": "' + lTitle + '"}'
    console.log(u)
    const jobj = JSON.parse(u)
    return this.http.post<any>("http://courseservice-env.eba-kc5r3dri.us-east-2.elasticbeanstalk.com/api/v1/modules/", jobj)
    // return this.http.patch<any>("http://localhost:8080/api/v1/modules/" + id, jobj)
  }

}
