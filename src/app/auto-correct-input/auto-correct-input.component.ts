import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-auto-correct-input',
  templateUrl: './auto-correct-input.component.html',
  styleUrls: ['./auto-correct-input.component.scss']
})
export class AutoCorrectInputComponent implements OnInit {

  @Input() placeholderText: string;
  inputText: string;
  autoCorrectMap: object;

  constructor() {
    this.inputText = '';
    this.autoCorrectMap = {
      stpid: 'stupid',
      dcku: 'duck',
      cdack: 'crack',
      tokl: 'toll'
    };
  }

  onTextChange(text: string) {
    const words = text.split(' ');
    words.forEach((word) => {
      const normalized = word.toLowerCase();
      if (this.autoCorrectMap[normalized]) {
        const textCase = this.getTextCase(word);
        let replacement = this.autoCorrectMap[normalized];
        switch (textCase) {
          case 'titlecase': {
            replacement = this.toTitleCase(replacement);
            break;
          }

          case 'uppercase': {
            replacement = replacement.toUpperCase();
            break;
          }
        }
        text = text.replace(word, replacement);
      }
    });

    this.inputText = text;
  }

  toTitleCase(text: string) {
    return `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`;
  }

  getTextCase(text: string) {
    if (text.toUpperCase() === text) {
      return 'uppercase';
    }

    if (text[0].toUpperCase() === text[0] && text.slice(1).toLowerCase() === text.slice(1)) {
      return 'titlecase';
    }
  }

  ngOnInit() {
  }

}
