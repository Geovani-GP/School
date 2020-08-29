import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  user: any;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
   }

  ngOnInit(): void {
  }



}
