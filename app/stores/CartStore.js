import { Store } from 'flux/utils';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import {
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  DESTROY,
} from 'app/constants/cartActions';

export default class CartStore extends Store {

  /**
   * Listen on action dispatched
   * @param  {object} action
   * @return {void}
   */
  __onDispatch(action) {
    switch(action.type) {
      case ADD_ITEM:
      case UPDATE_ITEM:
        this.__addItem(
          action.product,
          action.quantity,
          action.price,
          action.name,
          action.image
        );
        break;
      case REMOVE_ITEM:
        this.__removeItem(action.product);
        break;
      case DESTROY:
        this.__destroy();
        break;
    }
  }

  /**
   * Add Item to cart
   * @param  {string} product
   * @param  {number} quantity
   * @param  {number} price
   * @param  {string} name
   * @param  {number} image
   * @return {void}
   */
  __addItem(product, quantity, price, name, image) {
    const index = this.getItemIndex(product);
    const items = this.getItems();

    const item = { product, quantity, price, name, image };

    if(index > -1) {
      this.__setItems([
        ...items.slice(0, index),
        item,
        ...items.slice(index + 1),
      ]);
    } else {
      this.__setItems([
        ...items,
        item,
      ]);
    }
  }

  /**
   * Check if cart has item
   * @param  {string} product
   * @return {boolean}
   */
  hasItem(product) {
    return this.getItemIndex(product) > -1;
  }

  /**
   * Get item
   * @param  {string} product
   * @return {object}
   */
  getItem(product) {
    return find(this.getItems(), (item) => item.product === product);
  }

  /**
   * Get item index
   * @param  {string} product
   * @return {number}
   */
  getItemIndex(product) {
    return findIndex(this.getItems(), (item) => item.product === product);
  }

  /**
   * Check if cart is empty
   * @return {Boolean}
   */
  isEmpty() {
    return this.getItems().length === 0;
  }

  /**
   * Get cart items
   * @return {object[]}
   */
  getItems() {
    return this.get().items;
  }

  /**
   * Get cart object
   * @return {object}
   */
  get() {
    return JSON.parse(localStorage.getItem('rs_cart')) || { items: [] };
  }

  /**
   * Remove item from cart
   * @param  {string} product
   * @return {void}
   */
  __removeItem(product) {
    const index = this.getItemIndex(product);
    const items = this.getItems();

    this.__setItems([
      ...items.slice(0, index),
      ...items.slice(index + 1),
    ]);
  }

  /**
   * Set cart items
   * @param  {object[]} items
   * @return {void}
   */
  __setItems(items) {
    this.__save({ items });
  }

  /**
   * Save cart
   * @param  {object} cart
   * @return {void}
   */
  __save(cart) {
    localStorage.setItem('rs_cart', JSON.stringify(cart));
    this.__emitChange();
  }

  /**
   * Destroy cart
   * @return {void}
   */
  __destroy() {
    localStorage.removeItem('rs_cart');
  }
}
