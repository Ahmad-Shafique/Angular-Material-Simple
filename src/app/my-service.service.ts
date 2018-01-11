import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MyServiceService {


  public subjectMock : Subject<any>;

  constructor() { 
    this.subjectMock = new Subject();
    this.ChangeSubjectValue("Hello Subject");
  }

  ChangeSubjectValue( value: string){
    this.subjectMock.next({text:value});
  }

  getValue(): Observable<any>{
    return this.subjectMock.asObservable();
  }



}
