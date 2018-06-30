import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Semester } from './models/semester';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  semesters$: Observable<Semester[]>;

  constructor(private data: DataService) {
    this.semesters$ = data.getSemesters();
  }
}
