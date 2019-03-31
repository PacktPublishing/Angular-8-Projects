import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent implements OnInit {
  inputText: string;
  tags: string[] = [];
  hint: string;

  constructor() {
    this.hint = 'Try some comma separated words';
  }

  onKey(event: any) {
    if (event.key === 'Enter') {
      this.tags = this.inputText.trim().split(',').map(val => val.trim());
      this.inputText = '';
    }
  }

  onDelete(index: number) {
    this.tags.splice(index, 1);
  }

  ngOnInit() {
  }
}
