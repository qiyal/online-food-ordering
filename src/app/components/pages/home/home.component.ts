import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  select: string;
  search: string;

  constructor() { }

  ngOnInit(): void {
    this.select = 'all';
  }

  isSelect(select: string): boolean {
    return (select === this.select);
  }

  setSelect(select: string) {
    this.select = select;
  }

}
