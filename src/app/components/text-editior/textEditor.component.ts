import { Component } from '@angular/core';

@Component({
  selector: 'text-editor',
  templateUrl: './textEditor.component.html',
  styleUrls: ['./textEditor.component.scss'],
})
export class TextEditorComponent {
  inputValue: string = '';
  outputText: string = '';
  history: string[] = [];

  appendText(): void {
    if (this.inputValue.trim()) {
      this.history.push(this.inputValue.trim());
      this.outputText = this.history.join(' ');
      this.inputValue = ''; // Clear input
    }
  }

  undoLast(): void {
    if (this.history.length > 0) {
      this.history.pop(); // Remove last entry
      this.outputText = this.history.join(' '); // Update output
    }
  }
}
