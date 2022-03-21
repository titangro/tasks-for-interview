export function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function () {
  const currentMinWidth = this.inner.minWidth();

  return currentMinWidth > this.width ? currentMinWidth : this.width;
};

StretchCell.prototype.minHeight = function () {
  const currentMinHeight = this.inner.minHeight();

  return currentMinHeight > this.height ? currentMinHeight : this.height;
};

StretchCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height);
};
