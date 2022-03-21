export const plus = (a, b) => a + b;

export const row = (a) => a * a;

export const average = (array) => {
  return array.reduce(plus) / array.length;
};

export const logger = (value, ...args) => {
  const isFunc = typeof value === 'function';
  const result = isFunc ? value.call(this, ...args) : value;

  const currentArgsParams = isFunc
    ? [`${value.name}() with arguments:`, args, ` , result -->\n`, result]
    : [result, ...args];

  console.table(...currentArgsParams);
};
