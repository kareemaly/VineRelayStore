import appDispatcher from 'app/dispatcher';
import CartActions from './CartActions';

export const cartActions = new CartActions(appDispatcher);
