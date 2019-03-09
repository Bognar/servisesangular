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
  namesfor={};
  
  constructor(private myService: MydataService) {
    this.people = myService.getPeople();
    this.name = myService.peopleReverse();
  }
  doit() {
    this.namesfor = {name:'perica', lastn:'perić', id: 10};
    this.myService.pushPeople(this.namesfor);
    
  }
  undoit() {
    this.myService.popPeople();
  }
}
