import { Component, OnInit, NgModule } from '@angular/core';
import { MyServiceService } from './my-service.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  data: string;
  times;

  private service: MyServiceService

  constructor(){ 
    this.service = new MyServiceService();
    this.times = 0;
  }

  ngOnInit(){
    this.service.getValue().subscribe(
      response => {
        this.data = response.text;
      },

      error => {
        console.log("Error detected");
      },

      () => {
        console.log("Subscription ended");
      }
    );
  }

  change(){
    if (this.times == 0)
    this.service.ChangeSubjectValue('Go to hell dude');
    else 
    this.service.ChangeSubjectValue('Really ?!!!');
    this.times += 1;
  }



  
}



