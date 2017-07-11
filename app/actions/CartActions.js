import {
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  DESTROY,
} from 'app/constants/cartActions';

export default class CartActions {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  addItem = (itemId, quantity = 1, price, name, image) => this.dispatcher.dispatch({
    type: ADD_ITEM,
    itemId,
    quantity,
    price,
    name,
    image,
  });

  updateItem = (itemId, quantity = 1, price, name, image) => this.dispatcher.dispatch({
    type: UPDATE_ITEM,
    itemId,
    quantity,
    price,
    name,
    image,
  });

  removeItem = (itemId) => this.dispatcher.dispatch({
    type: REMOVE_ITEM,
    itemId,
  });

  destroy = () => this.dispatcher.dispatch({
    type: DESTROY,
  });
}
