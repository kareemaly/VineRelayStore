import IoC from 'AppIoC';
import moment from 'moment';

/**
 * There's a script to reset production database on demo.vinerelay.com every 30mins.
 */
const getTimeTillNextReset = () => {
  const minutes = moment().minutes();
  const minutesLeft = minutes < 30 ? 30 - minutes - 1 : 60 - minutes - 1;

  return minutes === 0 ? `less than a minute` : `${minutesLeft} minutes`;
}

const notifierResolver = (notifierType) => ({
  type: notifierType,
  resolve: () => ({
    message: `Database is going to be reset in ${getTimeTillNextReset()}.`,
  })
});

IoC.callable('notifierResolver', [
  'notifierType',
], notifierResolver);
