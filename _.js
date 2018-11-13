const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end) {
    if (!end) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }

    let isInRange = start <= number && number < end ? true : false;
    return isInRange;
  },

  words(string) {
    let words = string.split([" "]);
    return words;
  },

  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    var startPaddingLength = Math.floor((length - string.length) / 2);
    var paddedString = " ";
    var paddedString1 = paddedString.repeat(startPaddingLength);
    var endPaddingLength = length - string.length - paddedString1.length * 2;
    var word = paddedString1 + string + paddedString1;

    if (endPaddingLength > 0) {
      word = word + paddedString;
    }
    return word;
  },

  has(object, key) {
    var hasValue = false;
    if (object[key] !== undefined) {
      hasValue = true;
    }

    return hasValue;
  },

  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      const originalValue = object[key];
      invertedObject = { originalValue: key };
    }
    return invertedObject;
  },

  findKey(object, predicate) {
    for (let key in object) {
      if (predicate(object[key])) {
        return key;
      }
    }
  },

  drop(array, n) {
    let droppedArray = [];
    if (!n) {
      n = 1;
    }
    if (n < array.length) {
      droppedArray = array.slice(n);
    }
    return droppedArray;
  },

  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index);
    });

    let droppedArray = this.drop(array, dropNumber);

    return droppedArray;
  },

  chunk(array, size = 1) {
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};

// Do not write or modify code below this line.
module.exports = _;
