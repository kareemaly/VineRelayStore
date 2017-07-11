import { Dispatcher } from 'flux';
import logger from 'app/utils/logger';

const appDispatcher = new Dispatcher();

appDispatcher.register(({ type, ...payload }) =>
  logger.info(`[${type}]`, payload));

export default appDispatcher;
