import chalk from 'chalk';
import ip from 'ip';

const divider = chalk.gray('\n-----------------------------------');


const logServerStarted = (prepend, port, host) => {
  console.log(`${prepend} started ! ${chalk.green('✓')}`);

  console.log(`
${chalk.bold('Access URLs:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
    LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
  `);
};

/**
 * Logger middleware, you can customize it to make messages more personal
 */
export default {

  // Called whenever there's an error on the server we want to print
  error: (err) => {
    console.error(err);
  },

  appStarted: (port, host) => {
    logServerStarted('Relay frontend server', port, host);
  },

  graphqlStarted: (port, host) => {
    logServerStarted('Graphql server', port, host);
  },
};

