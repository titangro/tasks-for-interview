import { repeatString } from './helpers';

export function TextCell(text) {
  this.text = text.split('\n');
}

TextCell.prototype.minWidth = function () {
  return this.text.reduce((width, line) => {
    return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function () {
  return this.text.length;
};

TextCell.prototype.draw = function (width, height) {
  const result = [];
  for (let i = 0; i < height; i++) {
    const line = this.text[i] || '';
    result.push(line + repeatString(' ', width - line.length));
  }
  return result;
};
