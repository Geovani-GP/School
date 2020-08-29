import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  user: any;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
   }
  ngOnInit(): void {
  }

}
