import { Component } from '@angular/core';
import { MydataService } from './mydata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[MydataService]
})
export class AppComponent {
  // testing to understand services better

  people = [];
  name = [];
  title = 'servTesting';
  
  constructor(private myService: MydataService) {
    this.people = myService.getPeople();
    this.name = myService.peopleReverse();
  }
  doit() {
    this.myService.pushPeople();
  }
  undoit() {
    this.myService.popPeople();
  }
}
