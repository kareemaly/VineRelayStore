import moment from 'moment';

export default {
  info: (...args) =>
    console.info('[' + moment().format('MMMM Do YYYY, h:mm:ss a') + ']', ...args),
};
