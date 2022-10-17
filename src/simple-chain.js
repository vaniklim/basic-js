const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
               link: [],

  getLength() {
    return this.link.length;
  },
  addLink( value ) {
    if (value === undefined) {
      value = '';
   }
   this.link.push(`( ${value} )`);
   return this;
  },
  removeLink( position ) {
    if (position <= 0 || position > this.link.length || typeof position != 'number') {
      this.link = [];
      throw new Error('You can\'t remove incorrect link!');
    };
    this.link.splice(--position, 1);
    return this;
  },
  reverseChain() {
    this.link.reverse();
    return this;
  },
  finishChain() {
    let res = this.link.join('~~');
    this.link = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
