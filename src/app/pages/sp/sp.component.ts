import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sp',
  templateUrl: './sp.component.html',
  styleUrls: ['./sp.component.css']
})
export class SpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  setTimeout(() => {
  this.router.navigate(['/login']);
  }, 10000);
  }
}
