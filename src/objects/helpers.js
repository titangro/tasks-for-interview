const getRowHeights = (rows) =>
  rows.map((row) =>
    row.reduce((maxHeight, ceil) => {
      return Math.max(maxHeight, ceil.minHeight());
    }, 0),
  );

const getColWidths = (rows) => {
  const [cols] = rows;
  console.log('🚀 ~ file: helpers.js ~ line 10 ~ getColWidths ~ rows', rows);

  return cols.map((_, index) => {
    return rows.reduce(
      (maxWidth, row) => Math.max(maxWidth, row[index].minWidth()),
      0,
    );
  });
};

const drawTableLine = (blocks, lineIndex) =>
  blocks.map((block) => block[lineIndex]).join(' ');

export const drawTableRow = (row, rowIndex, rows) => {
  const heights = getRowHeights(rows);
  const widths = getColWidths(rows);

  const blocks = row.map((cell, colIndex) =>
    cell.draw(widths[colIndex], heights[rowIndex]),
  );
  return blocks[0]
    .map((_, lineIndex) => drawTableLine(blocks, lineIndex))
    .join('\n');
};

export const repeatString = (string, times) => {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
};
