import appDispatcher from 'app/dispatcher';
import CartStore from './CartStore';

export const cartStore = new CartStore(appDispatcher);
