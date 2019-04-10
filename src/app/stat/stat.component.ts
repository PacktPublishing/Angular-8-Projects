import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() totalAmount: number;
  @Input() spentAmount: number;
  @Input() currency: string;
  @Input() from: string;
  @Input() to: string;

  constructor() {
  }

  get progressWidth(): string {
    return `${(this.spentAmount / this.totalAmount) * 100}%`;
  }

  ngOnInit() {
  }
}
