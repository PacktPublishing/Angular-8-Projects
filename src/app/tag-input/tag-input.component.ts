import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent implements OnInit {
  tags: string[] = [];
  hint: string;

  constructor() {
    this.hint = 'Try some comma separated words';
  }

  ngOnInit() {
  }
}
