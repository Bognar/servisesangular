import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  people = [
    {name: 'Josip', lastn: 'bognar', id: 1},
    {name: 'kristina', lastn: 'Šumiga', id: 2},
    {name: 'Jožef', lastn: 'bognar', id: 3}
  ];

  constructor() { }

getPeople() {
  return this.people;
}
peopleReverse() {
  return this.people.reverse();
}
pushPeople() {
  return this.people.push({name: 'Marko', lastn: 'Pekić', id: 4});
}
popPeople() {
  return this.people.pop();
}
}
