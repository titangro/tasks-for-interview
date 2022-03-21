import { MOUNTAINS } from '../data';
import { logger } from '../helpers';
import { drawTableRow, repeatString } from './helpers';
import { TextCell } from './text-ceil';
import { UnderlinedCell } from './underlined-cell';
import { pile } from './pile';
import { RTextCell } from './r-text-cell';
import { StretchCell } from './stretch-cell';
import { Seq, logFive, ArraySeq, RangeSeq } from './seq';

console.log('OBJECTS FILE OPEN ---->');

const drawTable = (rows) => rows.map(drawTableRow).join('\n');

const dataTable = (data) => {
  const keys = Object.keys(data[0]);

  const headers = keys.map((name) => {
    return new UnderlinedCell(new TextCell(name));
  });

  const body = data.map((row) => {
    return keys.map((name) => {
      return new TextCell(String(row[name]));
    });
  });

  return [headers].concat(body);
};

const dataTableWithRCeil = (data) => {
  const keys = Object.keys(data[0]);

  const headers = keys.map(function (name) {
    return new UnderlinedCell(new TextCell(name));
  });

  const body = data.map(function (row) {
    return keys.map(function (name) {
      const value = row[name];
      // Тут поменяли:
      if (typeof value == 'number') {
        return new RTextCell(String(value));
      }
      return new TextCell(String(value));
    });
  });
  return [headers].concat(body);
};

const getDataRows = (text, size, anotherText = '  ') => {
  const rows = [];

  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      if ((j + i) % 2 == 0) row.push(new TextCell(text));
      else row.push(new TextCell(anotherText));
    }
    rows.push(row);
  }

  return rows;
};

const rows = getDataRows('##', 5);
const rows2 = dataTable(MOUNTAINS);
const rows3 = dataTableWithRCeil(MOUNTAINS);

logger(drawTable, rows);
logger(drawTable, rows2);
logger(pile.height, '---> pile.height');
pile.height = 100;

Object.defineProperty(TextCell.prototype, 'heightProp', {
  get: function () {
    return this.text.length;
  },
});
logger(
  new TextCell('да\nну').heightProp,
  "---> new TextCell('да\nну').heightProp",
);
// TypeError
// testCellWithHeightProp.heightProp = 100;

logger(drawTable, rows3);

console.log(new RTextCell('A') instanceof RTextCell);
console.log(new RTextCell('A') instanceof TextCell);
console.log(new TextCell('A') instanceof RTextCell);
console.log([1] instanceof Array);

const sc = new StretchCell(new TextCell('abc'), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

logFive(new Seq(1, 5));
logFive(new ArraySeq([1, 21, 3, 343, 5, 1, 23]));
logFive(new RangeSeq(100, 1000));
