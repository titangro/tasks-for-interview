import { logger, row } from './helpers';

console.log('VECTOR FILE OPEN ---->');

export class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus({ x, y }) {
    return new Vector(this.x + x, this.y + y);
  }

  minus({ x, y }) {
    return new Vector(this.x - x, this.y - y);
  }

  get length() {
    return Math.sqrt(row(this.x) + row(this.y));
  }
}

logger(new Vector(1, 2).plus(new Vector(2, 3)));
logger(new Vector(1, 2).minus(new Vector(2, 3)));
logger(new Vector(3, 4).length);
