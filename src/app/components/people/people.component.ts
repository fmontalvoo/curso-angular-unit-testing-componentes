import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  person = new Person('Fulano', 'Detal', 25, 82, 1.77);

  constructor() { }

  ngOnInit(): void {
  }

}
