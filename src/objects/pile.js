export const pile = {
  elements: ['скорлупа', 'кожура', 'червяк'],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log('Игнорируем попытку задать высоту', value);
  },
};
