import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cross-words',
  templateUrl: './cross-words.component.html',
  styleUrls: ['./cross-words.component.scss']
})
export class CrossWordsComponent implements OnInit {

  public words: any[];
  public square: string[][];

  constructor() {
    this.words = [
      { word: 'skirt', description: '1 - Mini, midi or maxi' },
      { word: 'kangaroo', description: '2 - Wallaby or boongary' },
      { word: 'dinosaur', description: '3 - Jurassic beast' },
      { word: 'snowman', description: '4 - Winter sculpture' },
      { word: 'recital', description: '5 - Musical performance' },
    ];
    this.square = [
      ['S', 'K', 'I', 'R', 'T', ' ', 'D', ' '],
      [' ', 'A', ' ', ' ', ' ', ' ', 'I', ' '],
      ['S', 'N', 'O', 'W', 'M', 'A', 'N', ' '],
      [' ', 'G', ' ', ' ', ' ', ' ', 'O', ' '],
      [' ', 'A', ' ', ' ', ' ', ' ', 'S', ' '],
      [' ', 'R', 'E', 'C', 'I', 'T', 'A', 'L'],
      [' ', 'O', ' ', ' ', ' ', ' ', 'U', ' '],
      [' ', 'O', ' ', ' ', ' ', ' ', 'R', ' '],
    ];
  }

  public ngOnInit(): void {
    console.log('lenght = ', this.square.length);
    console.log('1 = ', this.square[0]);
  }

}
