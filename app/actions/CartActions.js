import {
  ADD_ITEM,
  UPDATE_ITEM_QUANTITY,
  REMOVE_ITEM,
  DESTROY,
} from 'app/constants/cartActions';

export default class CartActions {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  addItem = (product, quantity = 1, price, name, image) => this.dispatcher.dispatch({
    type: ADD_ITEM,
    product,
    quantity,
    price,
    name,
    image,
  });

  updateItemQuantity = (product, quantity = 1) => this.dispatcher.dispatch({
    type: UPDATE_ITEM_QUANTITY,
    product,
    quantity,
  });

  removeItem = (product) => this.dispatcher.dispatch({
    type: REMOVE_ITEM,
    product,
  });

  destroy = () => this.dispatcher.dispatch({
    type: DESTROY,
  });
}
