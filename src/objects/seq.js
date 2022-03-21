export function Seq(from, count, next = (num) => num + 1) {
  this.from = from;
  this.count = count;
  this.position = 1;
  this.nextFunc = next;
  this.value = {
    value: this.from,
    done: count <= 1,
  };
}

Seq.prototype.next = function () {
  this.position = this.position + 1;
  this.value = {
    value: this.nextFunc(this.value.value),
    done: this.position >= this.count,
  };

  return this.value;
};

export const logFive = (seq) => {
  console.log(`Console new seq, name: '${seq.constructor.name}'`);
  console.log('---> ', seq.value.value);
  if (!seq.value.done) {
    for (let i = 1; i < 5; i++) {
      const currentNode = seq.next();
      console.log('---> ', currentNode.value);

      if (currentNode.done) {
        console.log('seq DONE');
        return;
      }
    }
  }

  console.log('seq NOT DONE');
};

export function ArraySeq(array) {
  Seq.call(this, array[0], array.length, (i) => array[i]);
}

ArraySeq.prototype.next = function () {
  this.position = this.position + 1;
  this.value = {
    value: this.nextFunc(this.position - 1),
    done: this.position >= this.count,
  };

  return this.value;
};

export function RangeSeq(from, to) {
  Seq.call(this, from, to - from + 1);
}

RangeSeq.prototype.next = function () {
  this.position = this.position + 1;
  this.value = {
    value: this.nextFunc(this.value.value),
    done: this.position >= this.count,
  };

  return this.value;
};
