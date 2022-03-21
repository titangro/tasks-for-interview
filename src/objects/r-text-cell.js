import { repeatString } from './helpers';

import { TextCell } from './text-ceil';

export function RTextCell(text) {
  TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);

RTextCell.prototype.draw = function (width, height) {
  const result = [];

  for (let i = 0; i < height; i++) {
    const line = this.text[i] || '';
    result.push(repeatString(' ', width - line.length) + line);
  }

  return result;
};
