import { repeatString } from './helpers';

export function UnderlinedCell(inner) {
  this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function () {
  return this.inner.minWidth();
};

UnderlinedCell.prototype.minHeight = function () {
  return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height - 1).concat([repeatString('-', width)]);
};
