import { Store } from 'flux/utils';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import {
  ADD_ITEM,
  UPDATE_ITEM_QUANTITY,
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
    switch (action.type) {
      case ADD_ITEM:
        this.__addItem(
          action.product,
          action.quantity,
          action.price,
          action.name,
          action.image
        );
        break;
      case UPDATE_ITEM_QUANTITY:
        this.__updateItemQuantity(
          action.product,
          action.quantity,
        );
        break;
      case REMOVE_ITEM:
        this.__removeItem(action.product);
        break;
      case DESTROY:
        this.__destroy();
        break;
      default:
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

    if (index > -1) {
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
   * Add Item to cart
   * @param  {string} product
   * @param  {number} quantity
   * @param  {number} price
   * @param  {string} name
   * @param  {number} image
   * @return {void}
   */
  __updateItemQuantity(product, quantity) {
    const index = this.getItemIndex(product);
    const items = this.getItems();

    // You cant update quantity because item doesnt exist
    if (index < 0) {
      throw new Error('Item doesn\'t exist, cant\'t update quantity');
    }

    this.__setItems([
      ...items.slice(0, index),
      {
        ...items[index],
        quantity,
      },
      ...items.slice(index + 1),
    ]);
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
    localStorage.setItem('rs_cart', JSON.stringify({
      ...cart,
      // Re-calculate total price everytime you save the cart
      totalPrice: this.__calculateTotalPrice(),
    }));
    this.__emitChange();
  }

  /**
   * Calculate Total price
   * @return {number}
   */
  __calculateTotalPrice() {
    const totalPrice = this.getItems().reduce((sum, item) => sum + item.price, 0);
    return totalPrice.toFixed(2);
  }

  /**
   * Destroy cart
   * @return {void}
   */
  __destroy() {
    localStorage.removeItem('rs_cart');
  }
}
