import { Factory } from 'miragejs';

import { randomNumber, randomPick } from '../utils/randomnessGenerator';

export const factories = {
  product: Factory.extend({
    name(i) {
      return `Product ${i}`;
    },
    description(i) {
      return `Lorem ipsum dolorem sit amet`;
    },
    price(i) {
      return randomNumber(10, 100);
    },
    stock(i) {
      return randomNumber(0, 10);
    },
    category(i) {
      return randomPick(['manga', 'anime', 'action figure']);
    },
  }),
};
